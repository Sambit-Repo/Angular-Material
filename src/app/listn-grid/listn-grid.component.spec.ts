import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnGridComponent } from './listn-grid.component';

describe('ListnGridComponent', () => {
  let component: ListnGridComponent;
  let fixture: ComponentFixture<ListnGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
