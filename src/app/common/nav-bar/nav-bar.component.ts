import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from '../constants/routes';
import { TranslateService } from '@ngx-translate/core';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  shownav: boolean = true
  mobile: boolean
  availableRoutes = routes;
  availableLangs = ['en','es','fr','pt'];
  currentRoute: string
  maxVisibleDesktop = 10

  constructor(
    private readonly registry: MatIconRegistry, 
    private readonly domSanitizer: DomSanitizer,
    private readonly router: Router,
    private readonly translateService: TranslateService,
    ) {
  }

  ngOnInit(): void {
    console.log(this.translateService.langs)
    this.i18nIcons();
    this.startingLang();
    this.mobile = window.innerWidth <= 768;
    window.onresize = () => this.mobile = window.innerWidth <= 768;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.shownav = this.router.url !== '/';
      this.currentRoute = routes.find(route => this.router.url.includes(route)) ?? 'index';
    });
  }

  private i18nIcons() {
    this.availableLangs.forEach(lang => {
      this.registry.addSvgIcon(lang, 
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/i18n/${lang}.svg`)
        )
    })
  }

  startingLang() {
    if (window.localStorage.getItem('lang') && this.availableLangs.includes(window.localStorage.getItem('lang'))) {
      this.translateService.use(window.localStorage.getItem('lang'));
      return;
    }
    if (navigator.language && this.availableLangs.includes(navigator.language.slice(0,2))) {
      this.translateService.use(navigator.language.slice(0,2));
    }
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    window.localStorage.setItem('lang', lang);
  }
}
