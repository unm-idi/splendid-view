import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVRadioButtonsModule } from '../../../src';
import { SVRadioButtonDemoComponent } from './radio-button-demo';

@NgModule({
  declarations: [ SVRadioButtonDemoComponent ],
  imports: [ CommonModule, SVRadioButtonsModule ],
  exports: [ SVRadioButtonDemoComponent ],
  providers: [],
})
export class RadioButtonDemoModule {}
