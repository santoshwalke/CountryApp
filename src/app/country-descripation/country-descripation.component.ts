import { Component, OnInit } from '@angular/core';
import { CountryDescripationService } from './country-descripation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-country-descripation',
  templateUrl: './country-descripation.component.html',
  styleUrls: ['./country-descripation.component.scss']
})
export class CountryDescripationComponent implements OnInit {

    descripation: Object;
    subscripition: Subscription;

  constructor(private countryDescripation: CountryDescripationService) { }

  ngOnInit() {
      this.subscripition = this.countryDescripation.descripationChanged
      .subscribe(
          (descripation: Object) => {
              this.descripation = descripation;
          } 
      )
   }

}
