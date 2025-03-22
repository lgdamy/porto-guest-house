import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaComponent } from '@app/pages/cultura/cultura.component';
import { GastronomiaComponent } from '@app/pages/gastronomia/gastronomia.component';
import { LembrancasComponent } from '@app/pages/lembrancas/lembrancas.component';
import { MenuInicialComponent } from '@app/pages/menu-inicial/menu-inicial.component';
import { PontosTuristicosAtividadesComponent } from '@app/pages/pontos-turisticos-atividades/pontos-turisticos-atividades.component';
import { RoteirosProntosComponent } from '@app/pages/roteiros-prontos/roteiros-prontos.component';
import { VidaNoturnaComponent } from '@app/pages/vida-noturna/vida-noturna.component';
import { UtilidadesComponent } from '@app/pages/utilidades/utilidades.component';
import { UnderConstructionGuard } from './common/under-construction.guard';


export const routes: Routes = [
  {
    path:'',
    component: MenuInicialComponent
  },
  {
    path:'pontos-turisticos-atividades',
    component: PontosTuristicosAtividadesComponent
  },
  {
    path:'gastronomia',
    component: GastronomiaComponent
  },
  {
    path:'utilidades',
    component: UtilidadesComponent
  },
  {
    path:'vida-noturna',
    component: VidaNoturnaComponent
  },
  {
    path:'cultura',
    component: CulturaComponent
  },
  {
    path:'lembrancas',
    component: LembrancasComponent
  },
  {
    path:'roteiros-prontos',
    component: RoteirosProntosComponent,
    canActivate: [UnderConstructionGuard],
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: '/'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
