import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, Renderer2, ElementRef, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from './checkbox';

@Component({
  selector: 'sv-test-component',
  template: `
    <sv-checkbox [(ngModel)]="test1">One</sv-checkbox>
    <sv-checkbox [(ngModel)]="test2">Two</sv-checkbox>
  `
})
class SvCheckboxTest {
  test1: Boolean;
  test2 = true;
}


describe('Checkbox', () => {

  let fixture: ComponentFixture<SvCheckboxTest>;
  let testComp: SvCheckboxTest;
  let comps: Checkbox[];
  let des: DebugElement[];
  let els: HTMLElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Checkbox, SvCheckboxTest],
      imports: [ FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(SvCheckboxTest);
    testComp = fixture.componentInstance;
    comps = fixture.debugElement.children.map(de => de.componentInstance);
    des = fixture.debugElement.children;
    els = des.map(de => de.nativeElement);
    fixture.detectChanges();
  }));


  it('should be unchecked by default', () => {
    expect(comps[0].checked).toBeFalsy();
  });


  it('can be initialized to a true state', () => {
    expect(comps[1].checked).toBeTruthy();
  });


  it('should reflect it\'s state in its appearance', () => {
    expect(els[0].querySelector('.sv-checkbox-display').classList).not.toContain('active');
    comps[0].checked = true;
    fixture.detectChanges();
    expect(els[0].querySelector('.sv-checkbox-display').classList).toContain('active');
  });


  it('should change states when clicked', () => {
    els[0].querySelector('.sv-checkbox-container').dispatchEvent(new Event('click'));
    els[1].querySelector('.sv-checkbox-container').dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comps[0].checked).toBeTruthy();
    expect(comps[1].checked).toBeFalsy();
  });


  it('should be bound to ngModel', () => {
    expect(comps[0].checked).toBe(testComp.test1);
    expect(comps[1].checked).toBe(testComp.test2);

    comps[0].checked = true;
    testComp.test2 = false;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(comps[0].checked).toBe(testComp.test1);
      expect(comps[1].checked).toBe(testComp.test2);
    });
  });
});