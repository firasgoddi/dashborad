import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprivelegeComponent } from './addprivelege.component';

describe('AddprivelegeComponent', () => {
  let component: AddprivelegeComponent;
  let fixture: ComponentFixture<AddprivelegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprivelegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprivelegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
