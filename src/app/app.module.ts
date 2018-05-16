import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    StationComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
