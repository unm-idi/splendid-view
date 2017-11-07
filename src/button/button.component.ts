import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'sv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    trigger('loadingState', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.5)' }),
        animate('200ms')
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0, transform: 'scale(1.5)' }))
      ])
    ]),
    trigger('alternateState', [
      state('in', style({ opacity: 0, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 1, transform: 'translateX(10px)' }),
        animate('200ms ease-in-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in-out', style({ opacity: 0, transform: 'translateX(10px)' }))
      ])
    ])
    // trigger('alternateState', [
    //   state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    //   transition(':enter', [
    //     style({ opacity: 0, transform: 'translateX(10px)' }),
    //     animate('200ms')
    //   ]),
    //   transition(':leave', [
    //     animate('200ms', style({ opacity: 0, transform: 'translateX(10px)' }))
    //   ])
    // ])
  ]
})
export class SVButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() alternateState = false;

  @Output('onClick') clickEvent = new EventEmitter<any>();

  handleClick(event: any) {
    this.clickEvent.emit();
  }
}