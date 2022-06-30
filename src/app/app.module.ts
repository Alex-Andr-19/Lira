import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiraPageComponent } from './components/lira-page/lira-page.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { RouteMapComponent } from './components/route-map/route-map.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "route-map",
    component: RouteMapComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LiraPageComponent,
    MainComponent,
    RouteMapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
