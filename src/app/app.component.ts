import { Component, OnInit } from '@angular/core';
import { CountryStorageService } from './shared/country-storage.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subscription: Subscription;
  countryLists: Object;

  constructor(private countryStorageService: CountryStorageService) {}

  ngOnInit() {
      this.countryStorageService.getAllCountryList();
  }

}
