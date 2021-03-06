import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AlbumDetailComponent } from './components/album/album-detail.component';
import { ArtistDetailComponent } from './components/artist/artist-detail.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchResultListComponent } from './components/search/search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    LoginComponent,
    AlbumDetailComponent,
    ArtistDetailComponent,
    PageNotFoundComponent,
    SearchResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
