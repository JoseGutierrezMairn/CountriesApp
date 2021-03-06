import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryComponent } from './country/pages/country/country.component';
import { RegionComponent } from './country/pages/region/region.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { ViewCountryComponent } from './country/pages/view-country/view-country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full' 
    },
    {
        path: 'region',
        component: RegionComponent

    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'country/:id',
        component: ViewCountryComponent 
    }, 
    {
        path: '**',
        redirectTo: ''
    }
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}