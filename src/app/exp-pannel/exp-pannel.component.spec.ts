import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPannelComponent } from './exp-pannel.component';

describe('ExpPannelComponent', () => {
  let component: ExpPannelComponent;
  let fixture: ComponentFixture<ExpPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
