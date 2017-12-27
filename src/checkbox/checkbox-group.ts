import { Component, forwardRef, AfterViewInit } from '@angular/core';
import { CheckboxGroupService } from './checkbox-group-service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sv-checkbox-group',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SvCheckboxGroup),
      multi: true
    },
    CheckboxGroupService
  ],
  host: {
    'class': '.sv-checkbox-group'
  }
})

export class SvCheckboxGroup implements AfterViewInit {
  private _selectedValues: string[];

  propagateChange = (_: any) => { };

  constructor(private checkboxGroupService: CheckboxGroupService) {
    checkboxGroupService.valuesSelected$.subscribe(values => {
      this._selectedValues = values;
      this.propagateChange(this._selectedValues);
    });
  }

  writeValue(value: string[]) {
    this._selectedValues = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    // this.propagateChange = fn;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkboxGroupService.setValues(this._selectedValues);
    }, 0);
  }
}