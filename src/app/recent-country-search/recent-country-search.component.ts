import { Component, OnInit } from '@angular/core';
import { RecentCountryListService } from './recent-country-list.service';
import { CountryDescripationService } from '../country-descripation/country-descripation.service';

@Component({
  selector: 'app-recent-country-search',
  templateUrl: './recent-country-search.component.html',
  styleUrls: ['./recent-country-search.component.scss']
})
export class RecentCountrySearchComponent implements OnInit {
    countryObj : Object[] = [];

  constructor(
      private recentCountrySearch: RecentCountryListService,
      private countryDescripation: CountryDescripationService) { }

  ngOnInit() {
    this.recentCountrySearch.CountryObjChanged.
    subscribe(
        (Obj : []) => {
            this.countryObj = Obj;
            this.countryObj.reverse().sort();
        }
    )
  }

  countrySelected(country: Object) {
    this.countryDescripation.setCountryDescripation(country);
  }

}
