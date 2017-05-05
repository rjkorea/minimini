import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album.component';
import { ArtistComponent } from './artist.component';
import { SearchComponent } from './search.component';
import { LoginComponent } from './login.component';
import { AlbumDetailComponent } from './album-detail.component';
import { ArtistDetailComponent } from './artist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'album',  component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'album-detail/:id', component: AlbumDetailComponent },
  { path: 'artist-detail/:id', component: ArtistDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}