import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    RegionComponent,
    CountryComponent,
    ViewCountryComponent,
    CapitalComponent,
    CountryInputComponent,
    CountryTableComponent

  ],
  exports: [
    RegionComponent,
    CountryComponent,
    ViewCountryComponent,
    CapitalComponent
  ],
  imports: [
    CommonModule

  ]
})


export class CountryModule { }
