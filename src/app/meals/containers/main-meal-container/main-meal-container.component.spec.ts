import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMealContainerComponent } from './main-meal-container.component';

describe('MainMealContainerComponent', () => {
  let component: MainMealContainerComponent;
  let fixture: ComponentFixture<MainMealContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMealContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMealContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
