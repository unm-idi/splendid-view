import { Component } from '@angular/core';

@Component({
  selector: 'sv-checkbox-demo',
  templateUrl: 'checkbox-demo.html'
})

export class CheckboxDemo {
  value1 = false;
  value2 = true;

  groupValues = ['one', 'two'];
  twoChecked: boolean;
}