import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { MyMaterialModule } from './common/my-material.module';

import { AgGridModule } from 'ag-grid-angular';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    AgGridModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
