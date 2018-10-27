import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainNavComponent } from './containers/main-nav/main-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainNavComponent],
  exports: [
    MainNavComponent
  ]
})
export class NavigationModule { }
