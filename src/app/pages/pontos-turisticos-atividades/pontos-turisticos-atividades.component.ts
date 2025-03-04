import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

type Categorias = 'turistico'|'ar-livre'|'criancas'|'historia'|'gratis';

@Component({
  selector: 'app-pontos-turisticos-atividades',
  templateUrl: './pontos-turisticos-atividades.component.html',
  styleUrls: ['./pontos-turisticos-atividades.component.scss'],
  animations: [slideInOut]
})
export class PontosTuristicosAtividadesComponent extends AnimatedComponent implements OnInit {
  
  private filters: Record<Categorias,FormControl> = {
    'turistico': new FormControl(false), 
    'ar-livre': new FormControl(false),
    'criancas': new FormControl(false),
    'historia': new FormControl(false),
    'gratis': new FormControl(false)
  }

  filterMap: { name:string, form: FormControl }[]
  
  private entries: Record<number, Categorias[]> = {
    1:['ar-livre','gratis','turistico'], //RIBEIRA
    2:['ar-livre','gratis','turistico'], //PONTE DOM LUIS
    3:['historia','turistico'], //LIVRARIA LELLO
    4:['historia','turistico'], //CLERIGOS
    5:['historia', 'gratis', 'turistico'], //SAO BENTO
    6:['historia', 'turistico'], //SE DO PORTO
    7:['historia','turistico'], //PALACIO DA BOLSA
    8:['historia', 'turistico'], //SAO FRANCISCO
    9:['turistico'], //GAIA
    10:['ar-livre','criancas'], //SERRALVES
    11:['ar-livre','criancas'], //PALACIO DE CRISTAL
    12:['criancas'], //WORLD OF DISCOVERIES
    13:['criancas'], //SEALIFE
    14:['criancas','ar-livre'], //ZOO STO INACIO
    15:['ar-livre','criancas','gratis'], //PARQUE DA CIDADE
    16:['turistico'], //CASA DA MUSICA
    17:['ar-livre','criancas','gratis'], //JARDIM DAS VIRTUDES
    18:['ar-livre','gratis'], //FAROLIM DAS FELGUEIRAS
    19:['criancas','ar-livre'], //MINIGOLFE
    20:['turistico','criancas'], //CPPB
    21: ['ar-livre','criancas','gratis'], //SAO ROQUE
  }
  entryMap: { id: string, categorias: Categorias[] } []
  
  geoUrls$ = this.geolocatorService.getUrls('pontos-turisticos-atividades');

  constructor(private readonly geolocatorService: GeolocatorService) {
      super();
  }
  ngOnInit(): void {
    this.filterMap = Object.entries(this.filters).map(([key, value]) => ({ name: key, form: value }))
    this.entryMap = Object.entries(this.entries).map(([key, value]) => ({ id: key, categorias: value }))
  }

  shouldShow(i: number): boolean {
    const categories = this.entries[i];
    const selectedFilters = Object.keys(this.filters)
      .filter(key => this.filters[key as Categorias].value) as Categorias[];
    if (selectedFilters.length == 0) {
      return true;
    }
    return selectedFilters.every(filter => categories.includes(filter));
  }
  
  selectedFiltersCount(): number {
    return Object.values(this.filters).filter(filter => filter.value).length;
  }

}
