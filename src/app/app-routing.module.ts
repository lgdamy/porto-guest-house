import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadesArLivreComponent } from './pages/atividades-ar-livre/atividades-ar-livre.component';
import { AtividadesCriancasComponent } from './pages/atividades-criancas/atividades-criancas.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia.component';
import { LembrancasComponent } from './pages/lembrancas/lembrancas.component';
import { MenuInicialComponent } from './pages/menu-inicial/menu-inicial.component';
import { MercadosComponent } from './pages/mercados/mercados.component';
import { PontosTuristicosAtividadesComponent } from './pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { RoteirosProntosComponent } from './pages/roteiros-prontos/roteiros-prontos.component';
import { VidaNoturnaComponent } from './pages/vida-noturna/vida-noturna.component';


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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
