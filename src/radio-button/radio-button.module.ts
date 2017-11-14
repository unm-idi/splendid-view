import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SVRadioButtonComponent } from './radio-button';
import { SVRadioGroupDirective } from './radio-group';

@NgModule({
  declarations: [ SVRadioButtonComponent, SVRadioGroupDirective ],
  imports: [ CommonModule, FormsModule ],
  exports: [ SVRadioButtonComponent, SVRadioGroupDirective ],
  providers: [],
})
export class SVRadioButtonsModule {}
