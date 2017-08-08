[Home](../README.md)	
### Installation
**Check Versions** (07/08/2017)

	• node --version       8.2.1
	• npm --version        5.3.0
	• ng --version         1.2.7
	• yarn --version       0.27.5
	• ng set --global packageManager=yarn
	• ng new cat4
		○ it06\c\Users\sgz\cat4
	• cd cat4
	
**Material**

	• yarn add @angular/material 
		○ @angular/material@2.0.0-beta.8
	• yarn add @angular/cdk
		○ @angular/cdk@2.0.0-beta.8
	• yarn add --save hammerjs
	• yarn add -D @types/hammerjs
		○ in tsconfig.json :  "compilerOptions": {  "types": [ "hammerjs" ] }
		○ in app.module.ts: import 'hammerjs'  // just this one line

	• edit cat/src/index.html and add Material icons:
	        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
    • edit app/styles.css to add themes:
        @import "~@angular/material/prebuilt-themes/indigo-pink.css";
        
    • create common/my-material.module.ts and include MyMaterialModule into app.module.ts    
        
`create` ***[common/my-material.module.ts](./doc/my-material.md)***
	
**Store**

   	• yarn add @ngrx/store
   	• yarn add @ngrx/effects
   	• yarn add @ngrx/router-store
   	• yarn add @ngrx/store-devtools
   	• yarn add ngrx-store-freeze
   	• yarn add reselect
	[Redux DevTools - Chrome Web Store](https://www.google.de/search?q=redux+devtools)

***ag-Grid***

    • yarn add ag-grid ag-grid-angular
    • app.module.ts import AgGridModule from 'ag-grid-angular'		
		
***Tools***

    • yarn add lodash
    • yarn add -D @types/lodash
    * yarn add  
    • yarn add ng2-pdf-viewer

[Home](../README.md)	
	

