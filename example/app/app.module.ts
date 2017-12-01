import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ImportsModule } from './imports.module';

import { ButtonDemoComponent } from './button-demo/button-demo';
import { SpinnerDemo } from './spinner-demo/spinner-demo';

@NgModule({
  imports: [
    BrowserModule,
    ImportsModule
  ],
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    SpinnerDemo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
