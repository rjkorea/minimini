import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album.component';
import { ArtistComponent } from './artist.component';
import { SearchComponent } from './search.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: '/album', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'album',  component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}