import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class A {

  lat: number;
  lon: number;
  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GeolocatorService {

  private geoPoints = {
    'pontos-turisticos-atividades': {
      1: [41.140674, -8.610941], // RIBEIRA
      2: [41.142598, -8.610186], // PONTE DOM LUIS
      3: [41.146744, -8.614925], // LIVRARIA LELLO
      4: [41.145904, -8.613564], // TORRE DOS CLERIGOS
      5: [41.145555, -8.610724], // SAO BENTO
      6: [41.143063, -8.611189], // CATEDRAL DA SE
      7: [41.141338, -8.615261], // PALACIO DA BOLSA
      8: [41.141049, -8.615283], // IGREJA DE SAO FRANCISCO
      9: [41.138261, -8.611000], // V N GAIA
      10:[41.15979571634584, -8.660008064116747], //SERRALVES
      11:[41.148466104412165, -8.625191955480984], //PALACIO DE CRISTAL
      12:[41.143384833365644, -8.620973920295409], //WORLD OF DISCOVERIES
      13:[41.16870320241859, -8.687825578839492], //SEALIFE
      14:[41.092557480779, -8.537683938214148], //ZOO STO INACIO
      15:[41.17138964281062, -8.678902230597908], //PARQUE DA CIDADE
      16:[41.158298887757944, -8.63079967386141], //CASA DA MUSICA
      17:[41.146023941851155, -8.618620504582749], //JARDIM DAS VIRTUDES
      18:[41.14807635130207, -8.674526634388615], //FAROLIM DAS FELGUEIRAS
      19:[41.14765283421717, -8.67132155062522], //MINIGOLFE
      20:[41.13762894220415, -8.613600134220375], //CPPB
      21: [41.15752809946664, -8.587114779347031], //SAO ROQUE
    },
    'vida-noturna': {
      1: [41.147114, -8.614429], // GALERIAS DE PARIS
      2: [41.145899, -8.614815], // BASE PORTO
      3: [41.153650, -8.610285], // PEROLA NEGRA
      4: [41.146756, -8.605717], // MAUS HABITOS
      5: [41.146551, -8.614010], // PLANO B
      6: [41.157358, -8.636675], // HOT FIVE JAZZ E BLUES
      7: [41.135672, -8.613916], // WOW
      8: [41.148326, -8.612785], // MARIA PISTOLAS
    },
    'gastronomia': {
      1: [41.14893528340986, -8.609454378059556], // CONGA
      2: [41.146630807074146, -8.604934596963144], // BRASAO
      3: [41.14605210978931, -8.603480686023731], // CASA GUEDES
      4: [41.147941407621474, -8.607710234367477], // ABADIA
      5: [41.14498669843254, -8.606395711520982], // GAZELA
      6: [41.13697596217403, -8.61668864554985], // SANCHO PANÇA
      7: [41.149581097386374, -8.621417179715298], // LAREU
      8: [41.14590532862377, -8.604834184888299], // DOURO SENTIDO
      9: [41.14552825067441, -8.605509961088673], // ELEBE
      10: [41.14332468614653, -8.618159562386547], // TORREAO
    },
  }

  private geoUrls :  { [page: string]: { [key: number]: SafeResourceUrl } } = {}
  
  private $geoUrlsSubject = new BehaviorSubject<{ [page: string]: { [key: number]: SafeResourceUrl } }>(this.geoUrls);

  constructor(
    private readonly translate: TranslateService,
    private readonly domSanitizer: DomSanitizer
    ) {
      translate.onLangChange.subscribe(() => this.updateUrls())
      this.updateUrls();
  }

  private updateUrls() {
    Object.keys(this.geoPoints).forEach((page) => {
      if (!this.geoUrls[page]) {
        this.geoUrls[page] = {};
      }
      Object.keys(this.geoPoints[page]).forEach((key) => {
        var geoData = this.geoPoints[page][key];
        var url = `https://maps.google.com/maps?q=${geoData[0]},${geoData[1]}&hl=${this.translate.currentLang}&z=16&output=embed`;
        this.geoUrls[page][key] = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      })
    });
    this.$geoUrlsSubject.next(this.geoUrls);
  };

  public getUrls(page: string) : Observable<{[key: number] : SafeResourceUrl}> {
    return this.$geoUrlsSubject.pipe(map(urls => urls[page]));
  }

}