import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Checkbox } from './checkbox';
import { SvCheckboxGroup } from './checkbox-group';

@NgModule({
  imports: [ CommonModule ],
  exports: [ Checkbox, SvCheckboxGroup ],
  declarations: [ Checkbox, SvCheckboxGroup ],
  providers: [],
})
export class SvCheckboxModule { }
