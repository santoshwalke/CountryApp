import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class RecentCountryListService {

    countryObjArray: Object[] = [];
    CountryObjChanged = new Subject<Object>();

  constructor() { }

  setCountryList(CountryObj: Object) {
      if (this.countryObjArray.length <= 2) {
        this.countryObjArray.push(CountryObj);
        this.CountryObjChanged.next(this.countryObjArray);
      } else {
          this.countryObjArray.splice(this.countryObjArray.length-1, 1);
          this.countryObjArray.push(CountryObj);
          this.CountryObjChanged.next(this.countryObjArray);
      }
  }

  getCountryList() {
      return this.countryObjArray;
  }
}
