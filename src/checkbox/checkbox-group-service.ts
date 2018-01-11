import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// Service to communicate with all checkboxes in group
@Injectable()
export class CheckboxGroupService {
  private _selected = [];

  // Array to watch
  private _selectedValues = new Subject<Array<string>>();

  // Observable
  valuesSelected$: Observable<any> = this._selectedValues.asObservable();

  // Set values
  setValues(value: string[]) {
    this._selected = value;
    this._selectedValues.next(this._selected);
  }

  // Method to add value
  addValue(value: string) {
    this._selected.push(value);
    this._selectedValues.next(this._selected);
  }

  // Method to remove a value
  removeValue(value: string) {
    const i = this._selected.indexOf(value);
    this._selected.splice(i, 1);
    this._selectedValues.next(this._selected);
  }
}