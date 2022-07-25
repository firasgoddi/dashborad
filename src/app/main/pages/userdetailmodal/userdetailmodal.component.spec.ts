import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailmodalComponent } from './userdetailmodal.component';

describe('UserdetailmodalComponent', () => {
  let component: UserdetailmodalComponent;
  let fixture: ComponentFixture<UserdetailmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
