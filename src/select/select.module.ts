import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvSelect } from './select';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../core';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ SvSelect ],
  declarations: [ SvSelect, ClickOutsideDirective ],
  providers: [],
})
export class SvSelectModule { }
