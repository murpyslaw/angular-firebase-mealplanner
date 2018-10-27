import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOutletComponent } from './main-outlet.component';

describe('MainOutletComponent', () => {
  let component: MainOutletComponent;
  let fixture: ComponentFixture<MainOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
