import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatTableModule} from '@angular/material/table';
 
// import {MaterialModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,

    MatTableModule,
    MatSortModule,

    // MaterialModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
