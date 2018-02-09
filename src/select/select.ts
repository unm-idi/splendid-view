import { Component, Input, Renderer2, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { colorMixin, ColorPalette, ColorValue } from '../core';

import fontawesome from '@fortawesome/fontawesome';
import { faChevronDown, faCaretDown } from '@fortawesome/fontawesome-free-solid';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
fontawesome.library.add(faChevronDown, faCaretDown);

export class SvSelectBase {
  constructor(public _renderer: Renderer2, public _element: ElementRef) { }
}
export const _SvSelectBase = colorMixin(SvSelectBase);


@Component({
  selector: 'sv-select',
  templateUrl: 'select.html',
  styleUrls: ['select.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showOptions', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('100ms ease-out')
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ],
  host: {
    'class': 'sv-select',
  }
})

export class SvSelect extends _SvSelectBase implements OnInit {

  // The select box's color
  @Input() color: ColorPalette;

  // Determines if the options are searchable
  @Input() search = false;

  @Input() placeholder = 'Select';

  // The search key
  searchKey = '';

  // The search text field element
  @ViewChild('search') searchField: ElementRef;

  // The selected value
  private _selected: string;
  get selected() { return this._selected; }
  set selected(newValue: string) {
    this._selected = newValue;
  }

  // Options array
  @Input() options: Array<string> = [];

  // Filtered list
  private filteredOptions: Array<string>;

  // Flags if the select box is open
  private _open = false;
  get open() { return this._open; }
  set open(newValue: boolean) {

    if (newValue && this.search) {
      setTimeout(() => this.searchField.nativeElement.focus(), 0);
    } else if (!newValue && this.search) {
      this.searchKey = '';
    }

    this._open = newValue;
  }

  constructor(renderer: Renderer2, element: ElementRef) {
    super(renderer, element);
  }

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  filterOptions() {
    if (this.searchKey !== '') {
      this.filteredOptions = this.options.filter(option => {
        return option.toLowerCase().includes(this.searchKey);
      });
    } else {
      this.filteredOptions = this.options;
    }
  }

  makeSelection(option) {
    this.searchKey = '';
    this.filterOptions();
    this.selected = option;
    this.open = false;
  }

  something() {
    console.log('outside click!!!!');
  }
}