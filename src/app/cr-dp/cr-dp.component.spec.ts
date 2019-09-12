import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrDpComponent } from './cr-dp.component';

describe('CrDpComponent', () => {
  let component: CrDpComponent;
  let fixture: ComponentFixture<CrDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
