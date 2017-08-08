[Home](../README.md)
```
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  < import-list >
} from '@angular/material';

@NgModule({
  imports: [ 
    BrowserAnimationsModule,
    < import-list >
  ],
  exports: [
    BrowserAnimationsModule,
    < import-list >
  ]
})
export class MyMaterialModule {}
```
**import-list**  
```
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdChipsModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSidenavModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
```
[Home](../README.md)