import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegammeComponent } from './deletegamme.component';

describe('DeletegammeComponent', () => {
  let component: DeletegammeComponent;
  let fixture: ComponentFixture<DeletegammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletegammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
