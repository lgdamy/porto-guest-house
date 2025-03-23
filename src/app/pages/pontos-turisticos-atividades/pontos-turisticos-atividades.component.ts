import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

type Categorias = 'turistico'|'ar-livre'|'criancas'|'gratis';

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
    'gratis': new FormControl(false)
  }

  filterMap: { name:string, form: FormControl }[]

  trackByName(index: number, filter: {name}) {
    return filter.name;
  }
  
  private entries= new Map<number, Categorias[]>([
    [1,['turistico','ar-livre','gratis']], //RIBEIRA
    [2,['turistico','ar-livre','gratis']], //PONTE DOM LUIS
    [22, ['turistico']], //MERCADO BOLHAO
    [3,['turistico']], //LIVRARIA LELLO
    [4,['turistico']], //CLERIGOS
    [24, ['turistico']], //TIMEOUT MARKET
    [5,['turistico','gratis']], //SAO BENTO
    [6,['turistico']], //SE DO PORTO
    [7,['turistico']], //PALACIO DA BOLSA
    [8,['turistico']], //SAO FRANCISCO
    [9,['turistico']], //GAIA
    [10,['ar-livre','criancas']], //SERRALVES
    [11,['ar-livre','criancas']], //PALACIO DE CRISTAL
    [12,['criancas']], //WORLD OF DISCOVERIES
    [13,['criancas']], //SEALIFE
    [14,['ar-livre','criancas']], //ZOO STO INACIO
    [15,['ar-livre','criancas','gratis']], //PARQUE DA CIDADE
    [16,['turistico']], //CASA DA MUSICA
    [23, ['turistico']], //MERCADO BOM SUCESSO
    [17,['ar-livre','criancas','gratis']], //JARDIM DAS VIRTUDES
    [18,['turistico','ar-livre','gratis']], //FAROLIM DAS FELGUEIRAS
    [19,['ar-livre','criancas']], //MINIGOLFE
    [20,['turistico','criancas']], //CPPB
    [21, ['turistico','ar-livre','criancas','gratis']], //SAO ROQUE
  ])
  entryMap: { id: number, categorias: Categorias[] } []

  private distanceMap: Map<number,number>;

  trackById(index: number, entry: {id}) {
    return entry.id;
  }
  
  geoUrls$ = this.geolocatorService.getUrls('pontos-turisticos-atividades');

  constructor(
    private readonly geolocatorService: GeolocatorService,
    private readonly iconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,  
  ) {
      super();
  }

  ngOnInit(): void {
    this.filterMap = Object.entries(this.filters).map(([key, value]) => ({ name: key, form: value }));
    this.entryMap = Array.from(this.entries, ([id, categorias]) => ({ id, categorias }));
    this.filtersIcons();
  }

  private filtersIcons() {
    Object.keys(this.filters).forEach(category => {
      this.iconRegistry.addSvgIcon(category, 
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/pontos-turisticos-atividades/${category}.svg`)
        )
    });
  }

  shouldShow(i: number): boolean {
    const categories = this.entries.get(i);
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

  sort(sortBy: 'location'| 'default') {
    switch(sortBy) {
      case 'location':
        this.geolocatorService.getDistances('pontos-turisticos-atividades').then(
          distances => {
            this.distanceMap = distances;
            const order = Array.from(distances.keys());
            this.entryMap.sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id))
          }
        );
        break;
      default:
        const order = Array.from(this.entries.keys())
        this.distanceMap = null;
        this.entryMap.sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id)); 
    }
  }

  getDistance(item: number): string {
    const distance = this.distanceMap?.get(item);
    if (!distance) return null;
    if (distance < 1) return `${Math.round(distance * 10) * 100}m`;
    if (distance <= 5) return `${(Math.round(distance * 10) / 10).toFixed(1)}km`;
    return ">5km";
  }
}
