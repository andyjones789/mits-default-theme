import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PureElements } from './pure-elements';

import { AppComponent } from './app.component';

import { BrandLogo } from './brand-logo/brand-logo';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PureElements
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
