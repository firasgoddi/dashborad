import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetailmodalComponent } from './clientdetailmodal.component';

describe('ClientdetailmodalComponent', () => {
  let component: ClientdetailmodalComponent;
  let fixture: ComponentFixture<ClientdetailmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientdetailmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
