import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainOutletComponent } from './components/main-outlet/main-outlet.component';
import { NavigationModule } from './navigation/navigation.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MainSidebarContainerComponent } from './containers/main-sidebar-container/main-sidebar-container.component';

export const ROUTES: Route[] = [];

@NgModule({
  declarations: [AppComponent, MainOutletComponent, MainContainerComponent, MainSidebarContainerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    SidebarModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
