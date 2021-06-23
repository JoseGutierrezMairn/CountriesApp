import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent{

  get results(): Country[]{
    return this.countryService.result;
  }



  get resultLength(): boolean{
    return this.countryService.resultLength();
  }

  constructor(private countryService: CountryService){}

}
