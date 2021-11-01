import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MuseumitemsComponent } from './pages/museumitems/museumitems.component';
import { UniqueitemComponent } from './pages/uniqueitem/uniqueitem.component';

import { HttpClientModule } from '@angular/common/http';
import { MuseumService } from 'src/app/services/museum/museum.service';

@NgModule({
  declarations: [
    AppComponent,
    MuseumitemsComponent,
    UniqueitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
