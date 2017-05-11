import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AlbumDetailComponent } from './components/album/album-detail.component';
import { ArtistDetailComponent } from './components/artist/artist-detail.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'album',  component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'album-detail/:id', component: AlbumDetailComponent },
  { path: 'artist-detail/:id', component: ArtistDetailComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
