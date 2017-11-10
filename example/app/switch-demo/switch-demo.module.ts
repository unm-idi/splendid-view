import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SVSwitchModule } from '../../../src';
import { SwitchDemoComponent } from './switch-demo';

@NgModule({
  declarations: [ SwitchDemoComponent ],
  imports: [ CommonModule, SVSwitchModule ],
  exports: [ SwitchDemoComponent ],
  providers: [],
})
export class SwitchDemoModule {}
