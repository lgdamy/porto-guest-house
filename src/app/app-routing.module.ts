import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadesArLivreComponent } from './atividades-ar-livre/atividades-ar-livre.component';
import { AtividadesCriancasComponent } from './atividades-criancas/atividades-criancas.component';
import { CulturaComponent } from './cultura/cultura.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { LembrancasComponent } from './lembrancas/lembrancas.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { MercadosComponent } from './mercados/mercados.component';
import { PontosTuristicosAtividadesComponent } from './pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { RoteirosProntosComponent } from './roteiros-prontos/roteiros-prontos.component';
import { VidaNoturnaComponent } from './vida-noturna/vida-noturna.component';


const routes: Routes = [
  {
    path:'',
    component: MenuInicialComponent
  },
  {
    path:'atividades-ar-livre',
    component: AtividadesArLivreComponent
  },
  {
    path:'atividades-criancas',
    component: AtividadesCriancasComponent
  },
  {
    path:'cultura',
    component: CulturaComponent
  },
  {
    path:'gastronomia',
    component: GastronomiaComponent
  },
  {
    path:'lembrancas',
    component: LembrancasComponent
  },
  {
    path:'mercados',
    component: MercadosComponent
  },
  {
    path:'pontos-turisticos-atividades',
    component: PontosTuristicosAtividadesComponent
  },
  {
    path:'roteiros-prontos',
    component: RoteirosProntosComponent
  },
  {
    path:'vida-noturna',
    component: VidaNoturnaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
