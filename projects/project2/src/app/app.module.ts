import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CheckboxComponent, InputDirective} from "../../../ui/src/lib/forms";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputDirective,
    FormsModule,
    CheckboxComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
