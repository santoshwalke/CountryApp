import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class CountryDescripationService {

    descripation: Object = {};
    descripationChanged = new Subject<Object>();

  constructor() { }

  setCountryDescripation(descripation: Object) {
    this.descripation = descripation;
    this.descripationChanged.next(descripation);
  }

  getCountryDescripation() {
      return this.descripation;
  }
}
