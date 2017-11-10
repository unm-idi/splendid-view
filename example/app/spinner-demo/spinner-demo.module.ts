import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SVSpinnerModule } from '../../../src';
import { SpinnerDemoComponent } from './spinner-demo';

@NgModule({
  declarations: [ SpinnerDemoComponent ],
  imports: [ CommonModule, SVSpinnerModule ],
  exports: [ SpinnerDemoComponent ],
  providers: [],
})
export class SpinnerDemoModule {}
