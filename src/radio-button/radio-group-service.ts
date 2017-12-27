import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// Service to communicate with all radio buttons associated with the group
@Injectable()
export class RadioGroupService {
  // Value to watch
  private _selectedValue = new Subject<string>();

  // Observable
  valueSelected$ = this._selectedValue.asObservable();

  // Metho to change the selected value
  selectValue(value: string) {
    this._selectedValue.next(value);
  }
}