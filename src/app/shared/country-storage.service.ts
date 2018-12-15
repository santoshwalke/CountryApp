import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryListService } from '../country-lists/country-list.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryStorageService {
    path = 'assets/mock/country-list.json';
    countryList: Object;
    
    constructor(private httpClient: HttpClient,
        private countryListService: CountryListService) {}

    getAllCountryList() {
        this.httpClient.get<Object>(this.path, {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map(
        (countryList) => {
            return countryList;
        }
        ))
        .subscribe(
            (countryList) => {
                this.countryListService.setCountryLists(countryList);
            }
        )
    }
}
