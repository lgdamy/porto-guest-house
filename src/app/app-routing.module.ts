import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaComponent } from '@app/pages/cultura/cultura.component';
import { GastronomiaComponent } from '@app/pages/gastronomia/gastronomia.component';
import { LembrancasComponent } from '@app/pages/lembrancas/lembrancas.component';
import { MenuInicialComponent } from '@app/pages/menu-inicial/menu-inicial.component';
import { MercadosComponent } from '@app/pages/mercados/mercados.component';
import { PontosTuristicosAtividadesComponent } from '@app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { RoteirosProntosComponent } from '@app/pages/roteiros-prontos/roteiros-prontos.component';
import { VidaNoturnaComponent } from '@app/pages/vida-noturna/vida-noturna.component';


const routes: Routes = [
  {
    path:'',
    component: MenuInicialComponent
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
