import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../../../src';
import { ButtonDemoComponent } from './button-demo';

@NgModule({
  declarations: [ ButtonDemoComponent ],
  imports: [ CommonModule, ButtonModule ],
  exports: [ ButtonDemoComponent ],
  providers: [],
})
export class ButtonDemoModule {}
