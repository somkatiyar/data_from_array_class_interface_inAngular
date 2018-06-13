import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Home } from '../pages/home/home';
import {DataByClass } from '../pages/databyclass/databyclass';
import {DataByInterface } from '../pages/databyinterface/databyinterface';

import { AppComponent } from './app.component';
import { RouterModule, Routes}  from '@angular/router';



const appRoutes: Routes = [
  { path : 'home',component : Home},
  { path : 'databyclass', component : DataByClass},
  { path : 'databyinterface', component : DataByInterface},

];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    DataByClass,
    DataByInterface

  ],
    exports: [RouterModule],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
