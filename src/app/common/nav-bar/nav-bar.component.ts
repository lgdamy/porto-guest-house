import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from '@app/app-routing.module';
import { TranslateService } from '@ngx-translate/core';
import {filter} from 'rxjs/operators'
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navdetails: boolean = true;
  mobile: boolean
  availableRoutes;
  availableLangs = {
    'en':'English',
    'es':'Español',
    'fr':'Français',
    'pt':'Português',
  }
  currentRoute: string
  tooltip = {
    menu: "",
    language: "",
    home: ""
  }

  constructor(
    private readonly registry: MatIconRegistry, 
    private readonly domSanitizer: DomSanitizer,
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly tracking: TrackingService,
    ) {
  }

  ngOnInit(): void {
    this.i18nIcons();
    this.startingLang();
    this.updateTooltips();
    this.mobile = window.innerWidth <= 900;
    window.onresize = () => this.mobile = window.innerWidth <= 900;
    this.availableRoutes = routes.filter(route => !route.redirectTo).map(route => route.path).filter(routes=>!!routes);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event : NavigationEnd) => {
      this.navdetails = event.urlAfterRedirects !== '/';
      this.currentRoute = this.availableRoutes.find(route => this.router.url.includes(route)) ?? 'home';
      this.tracking.track('page_view', this.currentRoute, 'ROUTING')
    });
  }

  private i18nIcons() {
    Object.keys(this.availableLangs).forEach(lang => {
      this.registry.addSvgIcon(lang, 
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/i18n/${lang}.svg`)
        )
    })
  }

  private startingLang() {
    const startingLang = window.localStorage.getItem('lang') ?? navigator.language.slice(0,2);
    if (Object.keys(this.availableLangs).includes(startingLang)) {
      this.translateService.use(startingLang);
      this.tracking.track('language_init', startingLang, 'TRANSLATE');
    }
  }

  private updateTooltips() {
    Object.keys(this.tooltip).forEach(key => this.translateService.get(`common.navbar.${key}`)
      .subscribe(value => this.tooltip[key] = value));
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    window.localStorage.setItem('lang', lang);
    this.tracking.track('language_changed', lang,'TRANSLATE');
    this.updateTooltips();
  }
}
