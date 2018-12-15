import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountryListService } from './country-list.service';
import { CountryDescripationService } from '../country-descripation/country-descripation.service';
import { RecentCountryListService } from '../recent-country-search/recent-country-list.service';

@Component({
  selector: 'app-country-lists',
  templateUrl: './country-lists.component.html',
  styleUrls: ['./country-lists.component.scss']
})
export class CountryListsComponent implements OnInit, OnDestroy {
    countryList: Object;
    subscripition : Subscription;
    countryName: string = '';

  constructor(
      private countryListService: CountryListService,
      private countryDescripation: CountryDescripationService,
      private recentCountrySearch: RecentCountryListService) { }

  ngOnInit() {
      this.subscripition = this.countryListService.countryListChanged
      .subscribe(
          (countryList: Object) => {
            this.countryList = countryList;
          }
      )
      this.countryListService.getCountryLists();
  }

  countrySelected(country:Object) {
    this.countryDescripation.setCountryDescripation(country);
    this.recentCountrySearch.setCountryList(country);
    this.countryName = ''; 
  }

  ngOnDestroy() {
      this.subscripition.unsubscribe();
  }

}
