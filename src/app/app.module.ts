import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { PontosTuristicosAtividadesComponent } from './pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { MercadosComponent } from './mercados/mercados.component';
import { VidaNoturnaComponent } from './vida-noturna/vida-noturna.component';
import { AtividadesCriancasComponent } from './atividades-criancas/atividades-criancas.component';
import { AtividadesArLivreComponent } from './atividades-ar-livre/atividades-ar-livre.component';
import { LembrancasComponent } from './lembrancas/lembrancas.component';
import { CulturaComponent } from './cultura/cultura.component';
import { RoteirosProntosComponent } from './roteiros-prontos/roteiros-prontos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/', suffix: '.json'},
    {prefix: './assets/i18n/menu-inicial/', suffix: '.json'},
    {prefix: './assets/i18n/atividades-ar-livre/', suffix: '.json'},
    {prefix: './assets/i18n/atividades-criancas/', suffix: '.json'},
    {prefix: './assets/i18n/cultura/', suffix: '.json'},
    {prefix: './assets/i18n/gastronomia/', suffix: '.json'},
    {prefix: './assets/i18n/lembrancas/', suffix: '.json'},
    {prefix: './assets/i18n/mercados/', suffix: '.json'},
    {prefix: './assets/i18n/pontos-turisticos-atividades/', suffix: '.json'},
    {prefix: './assets/i18n/roteiros-prontos/', suffix: '.json'},
    {prefix: './assets/i18n/vida-noturna/', suffix: '.json'},
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    NavBarComponent,
    PontosTuristicosAtividadesComponent,
    GastronomiaComponent,
    MercadosComponent,
    VidaNoturnaComponent,
    AtividadesCriancasComponent,
    AtividadesArLivreComponent,
    LembrancasComponent,
    CulturaComponent,
    RoteirosProntosComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage:'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
