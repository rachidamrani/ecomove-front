import { Component } from '@angular/core';
import { CardAnnonceCovoitComponent } from '../../../components/cards/card-annonce-covoit/card-annonce-covoit.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';
import { TimeSelectorComponent } from '../../../components/time-selector/time-selector.component';

@Component({
  selector: 'app-search-carpool',
  standalone: true,
  imports: [CardAnnonceCovoitComponent, NumberPageComponent, TimeSelectorComponent],
  templateUrl: './search-carpool.component.html',
  styleUrl: './search-carpool.component.css'
})
export class SearchCarpoolComponent {

}
