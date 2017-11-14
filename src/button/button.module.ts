import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SVRippleDirective } from '../core/ripple';

import { SVButtonComponent } from './button.component';
import { SVSpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [ SVButtonComponent, SVRippleDirective ],
  imports: [ CommonModule, SVSpinnerModule, BrowserModule, BrowserAnimationsModule ],
  exports: [ SVButtonComponent ],
  providers: [],
})
export class ButtonModule {}
