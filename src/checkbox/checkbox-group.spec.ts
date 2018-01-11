import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvCheckboxGroup } from './checkbox-group';
import { Checkbox } from './checkbox';

@Component({
  selector: 'sv-test-component',
  template: `
    <sv-checkbox-group [(ngModel)]="values" color="warning">
      <sv-checkbox value="one">One</sv-checkbox>
      <sv-checkbox value="two">Two</sv-checkbox>
      <sv-checkbox value="three">Three</sv-checkbox>
    </sv-checkbox-group>
  `
})
class SvCheckboxGroupTest {
  values = ['two'];
}


describe('Checkbox Group', () => {

  let fixture: ComponentFixture<SvCheckboxGroupTest>;
  let testComp: SvCheckboxGroupTest;
  let groupComp: SvCheckboxGroup;
  let checkboxes: Checkbox[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SvCheckboxGroup, Checkbox, SvCheckboxGroupTest],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SvCheckboxGroupTest);
    testComp = fixture.componentInstance;
    groupComp = fixture.debugElement.children[0].componentInstance;
    checkboxes = fixture.debugElement.children[0].children.map(x => x.componentInstance);
    fixture.detectChanges();
  }));


  it('should propagate color down to its children', () => {
    checkboxes.forEach(checkbox => {
      expect(checkbox.color).toBe('warning');
    });
  });


  it('should be initialized via ngModel', () => {
    expect(groupComp.selectedValues).toEqual(testComp.values);
    expect(checkboxes[0].checked && checkboxes[2].checked).toBeFalsy();
    expect(checkboxes[1].checked).toBeTruthy();
  });


  it('should bind to ngModel', () => {
    testComp.values = ['one', 'two'];
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(testComp.values).toEqual(groupComp.selectedValues);
      expect(checkboxes[0].checked && checkboxes[1].checked).toBeTruthy();

      checkboxes[1].checked = false;
      checkboxes[2].checked = true;
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(testComp.values.sort()).toEqual(['one', 'three']);
      });
    });
  });


  it('should update list of values when a checkbox state is changed', () => {
    expect(groupComp.selectedValues).toEqual(['two']);
    checkboxes[0].checked = true;
    fixture.detectChanges();
    expect(groupComp.selectedValues.sort()).toEqual(['one', 'two']);

    checkboxes[1].checked = false;
    fixture.detectChanges();
    expect(groupComp.selectedValues).toEqual(['one']);
  });
});