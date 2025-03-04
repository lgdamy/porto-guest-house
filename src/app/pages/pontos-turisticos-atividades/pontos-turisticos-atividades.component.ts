import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

type Categorias = 'ar-livre'|'criancas'|'historia'|'gratis';

@Component({
  selector: 'app-pontos-turisticos-atividades',
  templateUrl: './pontos-turisticos-atividades.component.html',
  styleUrls: ['./pontos-turisticos-atividades.component.scss'],
  animations: [slideInOut]
})
export class PontosTuristicosAtividadesComponent extends AnimatedComponent {
  
  public filters: Record<Categorias,FormControl> = {
    'ar-livre': new FormControl(true),
    'criancas': new FormControl(true),
    'historia': new FormControl(true),
    'gratis': new FormControl(true)
  }

  public categories: Record<number, Categorias[]> = {
    1:['ar-livre','gratis'], //RIBEIRA
    2:['ar-livre','gratis'], //PONTE DOM LUIS
    3:['historia','ar-livre'], //LIVRARIA LELLO
    4:['historia'], //CLERIGOS
    5:['historia', 'gratis'], //SAO BENTO
    6:['historia'], //SE DO PORTO
    7:['historia'], //PALACIO DA BOLSA
    8:['historia'], //SAO FRANCISCO
    9:['historia'], //GAIA
    10:['ar-livre','criancas'], //SERRALVES
    11:['ar-livre','criancas'], //PALACIO DE CRISTAL
    12:['criancas'], //WORLD OF DISCOVERIES
    13:['criancas'], //SEALIFE
    14:['criancas'], //ZOO STO INACIO
    15:['ar-livre','criancas','gratis'], //PARQUE DA CIDADE
    16:['gratis'], //CASA DA MUSICA
    17:['ar-livre','criancas','gratis'], //JARDIM DAS VIRTUDES
    18:['ar-livre','gratis'], //FAROLIM DAS FELGUEIRAS
    19:['criancas','ar-livre'], //MINIGOLFE
    20:['gratis','criancas'], //CPPB
    21: ['ar-livre','criancas','gratis'], //SAO ROQUE
  }

  public geoUrls$ = this.geolocatorService.getUrls('pontos-turisticos-atividades');

  constructor(private readonly geolocatorService: GeolocatorService) {
      super();
  }

  public shouldShow(i: number): boolean {
  const panelCategories = this.categories[i];
  const selectedFilters = Object.keys(this.filters)
    .filter(key => this.filters[key as Categorias].value) as Categorias[];
  return panelCategories.some(category => selectedFilters.includes(category));
  }
}
