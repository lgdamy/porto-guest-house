import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuInicialComponent } from '@app/pages/menu-inicial/menu-inicial.component';
import { NavBarComponent } from '@app/common/nav-bar/nav-bar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { PontosTuristicosAtividadesComponent } from '@app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { GastronomiaComponent } from '@app/pages/gastronomia/gastronomia.component';
import { VidaNoturnaComponent } from '@app/pages/vida-noturna/vida-noturna.component';
import { LembrancasComponent } from '@app/pages/lembrancas/lembrancas.component';
import { CulturaComponent } from '@app/pages/cultura/cultura.component';
import { RoteirosProntosComponent } from '@app/pages/roteiros-prontos/roteiros-prontos.component';
import { UtilidadesComponent } from '@app/pages/utilidades/utilidades.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', `.json?v=${new Date().getTime()}`);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    NavBarComponent,
    PontosTuristicosAtividadesComponent,
    GastronomiaComponent,
    VidaNoturnaComponent,
    LembrancasComponent,
    CulturaComponent,
    RoteirosProntosComponent,
    UtilidadesComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
