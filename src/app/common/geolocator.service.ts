import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { last, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocatorService {

  private geoPoints: Record<string,Record<number,number[]>> = {
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
      22: [41.14868573483047, -8.607429760670504], //MERCADO BOLHAO
      23: [41.155832183857584, -8.629643239888754], //MERCADO BOM SUCESSO
      24: [41.145128044063924, -8.6096388849987], //TIMEOUT MARKET
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
    'utilidades': {
      3: [41.14464202889129, -8.606624321883642], //GARAGEM IBERIA
      4: [41.146583567932524, -8.604665481371214], //PINGO DOCE
      5: [41.1486874006843, -8.600337786123049], //CONTINENTE
      6: [41.14479042647803, -8.606628052735509], //FARMACIA HENRIQUES
    },
    'cultura': {
      1: [41.15979571634584, -8.660008064116747], // SERRALVES
      2: [41.147547051993065, -8.621619527289269], // MUSEU SOARES DOS REIS
      3: [41.14475636758315, -8.616075789278158], // CENTRO PORTUGUES FOTOGRAFIA
      4: [41.14541587873243, -8.607048227912175], // CINEMA DA BATALHA
      5: [41.144795671482846, -8.607336072068222], // TEATRO SAO JOAO
      6: [41.158298887757944, -8.63079967386141], // CASA DA MUSICA
      7: [41.143567519804456, -8.62159174813223], // ALFANDEGA
    },
    'lembrancas': {
      1: [41.14882395455261, -8.622858630673598], // OCERAMICA
      2: [41.150080533301335, -8.617661081516085], // OGALERIA
      3: [41.14721483610598, -8.616934364245932], // GARRAFEIRA CARMO
      4: [41.14611800812983, -8.61021021371094], // TORANJA
      5: [41.150353328285895, -8.60828445672526], // CASA NATAL
      6: [41.14842190174875, -8.606635521240191], // PEROLA BOLHAO
      7: [41.14436072036174, -8.60587034520225], // PROMETEU
    },
  }

  private geoUrls :  { [page: string]: { [key: number]: SafeResourceUrl } } = {}
  
  private $geoUrlsSubject = new BehaviorSubject<{ [page: string]: { [key: number]: SafeResourceUrl } }>(this.geoUrls);

  constructor(
    private readonly translate: TranslateService,
    private readonly domSanitizer: DomSanitizer,
    private readonly snackbar: MatSnackBar,
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

  getUrls(page: string) : Observable<{[key: number] : SafeResourceUrl}> {
    return this.$geoUrlsSubject.pipe(map(urls => urls[page]));
  }

  async getDistances(page: string) {
    const userCoords = await this.getUserLocation();
    const distances = new Map<number,number>();
    Object.entries(this.geoPoints[page])
      .map(([item,coords]) => {return {id: Number(item), distance: this.getDistance(userCoords.lat, userCoords.lon, coords[0],coords[1])}})
      .sort((a, b) => a.distance - b.distance)
      .forEach(item => distances.set(item.id, item.distance));
    return distances;
    
  }
  private getUserLocation(): Promise<{lat,lon}> {
    let lat = 41.14549891861889;
    let lon = -8.605505197117774;
    return new Promise((resolve) => {
      if(!navigator.geolocation) {
        resolve(this.fallback());
      }
      navigator.geolocation.getCurrentPosition(
        success => resolve({lat: success.coords.latitude, lon: success.coords.longitude}),
        error => {
          resolve(this.fallback(error));
        },
        {
          maximumAge: 30_000,
          timeout: 15_000,
          enableHighAccuracy: false
        }
      )
    })
  }

  private fallback(error?): {lat, lon} {
    if (error) console.error(error);
    this.snackbar.open(this.translate.instant('common.geolocation-error'), undefined, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
    return { lat: 41.14549891861889, lon: -8.605505197117774 }

  }

  private getDistance(lat1Graus, lon1Graus, lat2Graus, lon2Graus): number {
    const lat1 = this.toRad(lat1Graus);
    const lon1 = this.toRad(lon1Graus);
    const lat2 = this.toRad(lat2Graus);
    const lon2 = this.toRad(lon2Graus);
    
    const { sin, cos, sqrt, atan2 } = Math;
    
    const R = 6371; // earth radius in km 
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a = sin(dLat / 2) * sin(dLat / 2)
            + cos(lat1) * cos(lat2)
            * sin(dLon / 2) * sin(dLon / 2);
    const c = 2 * atan2(sqrt(a), sqrt(1 - a)); 
    const d = R * c;
    return d; // distance in km

  }

  private toRad(degree) {
    return degree * Math.PI / 180;
  }
}