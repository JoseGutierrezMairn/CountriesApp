import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface'





@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private serviceUrl: string = 'https://restcountries.eu/rest/v2';
    result: Country[] = [];
    searchByCountryName(query: string = '', specification: string = ''): void{
        query = query.trim().toLowerCase();


        this.http.get<Country[]>(`${this.serviceUrl}`+specification+query)
        .subscribe((resp: Country[]) => {
            this.result = resp;
        });
    }

    resultLength(): boolean{
        return this.result.length > 0;
    }
    constructor(private http: HttpClient){ }

}