import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ImportsModule } from './imports.module';

import { ButtonDemoComponent } from './button-demo/button-demo';
import { SpinnerDemo } from './spinner-demo/spinner-demo';
import { SwitchDemo } from './switch-demo/switch-demo';
import { RadioButtonDemo } from './radio-button-demo/radio-button-demo';
import { CheckboxDemo } from './checkbox-demo/checkbox-demo';
// import { SelectDemo } from './select-demo/select-demo';

import { SvNotificationsModule } from '../../src';

@NgModule({
  imports: [
    SvNotificationsModule.forRoot(),
    BrowserModule,
    ImportsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    SpinnerDemo,
    SwitchDemo,
    RadioButtonDemo,
    CheckboxDemo
    // SelectDemo
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
