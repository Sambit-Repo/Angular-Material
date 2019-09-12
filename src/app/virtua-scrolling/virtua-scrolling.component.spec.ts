import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuaScrollingComponent } from './virtua-scrolling.component';

describe('VirtuaScrollingComponent', () => {
  let component: VirtuaScrollingComponent;
  let fixture: ComponentFixture<VirtuaScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuaScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuaScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
