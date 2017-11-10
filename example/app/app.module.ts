import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ButtonDemoModule } from './button-demo/button-demo.module';
import { SpinnerDemoModule } from './spinner-demo/spinner-demo.module';
import { SwitchDemoModule } from './switch-demo/switch-demo.module';

@NgModule({
  imports: [
    BrowserModule,
    ButtonDemoModule,
    SpinnerDemoModule,
    SwitchDemoModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
