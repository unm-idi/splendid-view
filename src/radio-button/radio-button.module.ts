import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvRadioButton } from './radio-button';
import { SvRadioGroup } from './radio-group';

@NgModule({
  declarations: [ SvRadioButton, SvRadioGroup ],
  imports: [ CommonModule, FormsModule ],
  exports: [ SvRadioButton, SvRadioGroup ],
  providers: [],
})
export class SvRadioButtonModule { }