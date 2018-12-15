import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/filter.pipe';
import { CountryListsComponent } from './country-lists/country-lists.component';
import { RecentCountrySearchComponent } from './recent-country-search/recent-country-search.component';
import { CountryDescripationComponent } from './country-descripation/country-descripation.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CountryListsComponent,
    RecentCountrySearchComponent,
    CountryDescripationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
