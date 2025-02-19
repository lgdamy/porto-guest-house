import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocatorService {

  private geoPoints = {
    'pontos-turisticos-atividades': {
      1: {lat: 41.140674, lon: -8.610941},
      2: {lat: 41.142598, lon: -8.610186},
      3: {lat: 41.146744, lon: -8.614925},
      4: {lat: 41.145904, lon: -8.613564},
      5: {lat: 41.145555, lon: -8.610724},
      6: {lat: 41.143063, lon: -8.611189},
      7: {lat: 41.141338, lon: -8.615261},
      8: {lat: 41.141049, lon: -8.615283},
      9: {lat: 41.138261, lon: -8.611000}  
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
        var url = `https://maps.google.com/maps?q=${geoData.lat},${geoData.lon}&hl=${this.translate.currentLang}&z=16&output=embed`;
        this.geoUrls[page][key] = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      })
    });
    this.$geoUrlsSubject.next(this.geoUrls);
  };

  public getUrls(page: string) : Observable<{[key: number] : SafeResourceUrl}> {
    return this.$geoUrlsSubject.pipe(map(urls => urls[page]));
  }

}