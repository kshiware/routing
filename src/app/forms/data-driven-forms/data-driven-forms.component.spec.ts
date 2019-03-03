import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenFormsComponent } from './data-driven-forms.component';

describe('DataDrivenFormsComponent', () => {
  let component: DataDrivenFormsComponent;
  let fixture: ComponentFixture<DataDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
