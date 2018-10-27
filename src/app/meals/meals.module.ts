import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { MainMealContainerComponent } from './containers/main-meal-container/main-meal-container.component';

export const ROUTES: Route[] = [
  {
    path: `meals`,
    component: MainMealContainerComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [MainMealContainerComponent],
  exports: [MainMealContainerComponent]
})
export class MealsModule {}
