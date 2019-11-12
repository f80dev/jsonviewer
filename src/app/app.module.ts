import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import { ViewerComponent } from './viewer/viewer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
