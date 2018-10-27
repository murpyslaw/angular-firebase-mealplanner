import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainOutletComponent } from './components/main-outlet/main-outlet.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MainSidebarContainerComponent } from './containers/main-sidebar-container/main-sidebar-container.component';
import { MealsModule, ROUTES as MealRoutes } from './meals/meals.module';
import { NavigationModule } from './navigation/navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';

export const ROUTES: Route[] = [
  {
    path: ``,
    component: MainContainerComponent,
    children: [
      {
        path: ``,
        component: MainOutletComponent
      },
      ...MealRoutes
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainOutletComponent,
    MainContainerComponent,
    MainSidebarContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
    SidebarModule,
    NavigationModule,
    MealsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
