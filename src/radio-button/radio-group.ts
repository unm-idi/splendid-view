import { Directive, Input, Output, EventEmitter, ContentChildren, QueryList, Injectable, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RadioGroupService {
  private _selectedValue = new Subject<string>();

  valueSelected$ = this._selectedValue.asObservable();

  selectValue(value: string) {
    this._selectedValue.next(value);
  }
}


@Directive({
  selector: 'sv-radio-group',
  providers: [ RadioGroupService ]
})
export class SVRadioGroupDirective implements AfterViewInit {
  @Input() selected: string;
  @Output() selectedChange = new EventEmitter<string>();

  constructor(private radioGroupService: RadioGroupService) {
    radioGroupService.valueSelected$.subscribe(value => {
      this.selected = value;
      this.selectedChange.emit(this.selected);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.radioGroupService.selectValue(this.selected), 0);
  }
}
