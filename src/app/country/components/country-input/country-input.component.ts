import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  @ViewChild('inputText') inputText!: ElementRef<HTMLInputElement>;

  private specification: string = '/name/';

  searchByCountryName(){
    const value = this.inputText.nativeElement.value;

    if(value.trim().length === 0){return;}
    this.countryService.searchByCountryName(value, this.specification);


    this.inputText.nativeElement.value = '';
  }


  constructor(private countryService: CountryService){ }
}
