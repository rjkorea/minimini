import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album.component';
import { ArtistComponent } from './artist.component';
import { SearchComponent } from './search.component';
import { LoginComponent } from './login.component';
import { AlbumDetailComponent } from './album-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    LoginComponent,
    AlbumDetailComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
