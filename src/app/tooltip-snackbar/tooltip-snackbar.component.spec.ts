import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipSnackbarComponent } from './tooltip-snackbar.component';

describe('TooltipSnackbarComponent', () => {
  let component: TooltipSnackbarComponent;
  let fixture: ComponentFixture<TooltipSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
