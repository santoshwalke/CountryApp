import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
    countryListChanged = new Subject<Object>();
    
    private countryList: Object;

    constructor() { }

    setCountryLists(countryLists: Object) {
        this.countryList = countryLists;
        this.countryListChanged.next(this.countryList);
    }

    getCountryLists() {
        return this.countryList;
    }
}
