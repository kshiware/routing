import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DataDrivenFormsComponent } from './forms/data-driven-forms/data-driven-forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormsComponent,
    DataDrivenFormsComponent,
    TemplateDrivenFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // template driven
    ReactiveFormsModule, // data driven
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
