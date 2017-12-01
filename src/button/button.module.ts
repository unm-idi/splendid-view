import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvButton } from './button';
import { ButtonState } from './button-state';
import { SvSpinnerModule } from '../spinner/spinner.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ SvButton, ButtonState ],
  imports: [ CommonModule, BrowserModule, BrowserAnimationsModule, SvSpinnerModule ],
  exports: [ SvButton, ButtonState ],
  providers: [],
})
export class SvButtonModule {}