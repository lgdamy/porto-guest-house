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
      1: [41.140674, -8.610941],// RIBEIRA
      2: [41.142598, -8.610186],// PONTE DOM LUIS
      3: [41.146744, -8.614925],// LIVRARIA LELLO
      4: [41.145904, -8.613564],// TORRE DOS CLERIGOS
      5: [41.145555, -8.610724],// SAO BENTO
      6: [41.143063, -8.611189],// CATEDRAL DA SE
      7: [41.141338, -8.615261],// PALACIO DA BOLSA
      8: [41.141049, -8.615283],// IGREJA DE SAO FRANCISCO
      9: [41.138261, -8.611000],// V N GAIA
    },
    'vida-noturna': {
      1: [41.147114, -8.614429],// GALERIAS DE PARIS
      2: [41.145899, -8.614815],// BASE PORTO
      3: [41.153650, -8.610285],// PEROLA NEGRA
      4: [41.146756, -8.605717],// MAUS HABITOS
      5: [41.146551, -8.614010],// PLANO B
      6: [41.157358, -8.636675],// HOT FIVE JAZZ E BLUES
      7: [41.147242, -8.614337],// MORECLUB
      8: [41.148326, -8.612785],// MARIA PISTOLAS
    }
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