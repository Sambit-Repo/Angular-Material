import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtOperationsComponent } from './dt-operations.component';

describe('DtOperationsComponent', () => {
  let component: DtOperationsComponent;
  let fixture: ComponentFixture<DtOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
