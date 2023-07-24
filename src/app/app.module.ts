import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerAppComponent } from './layout/container-app/container-app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialSharedModule } from './shared/material-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialSharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
