import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album.component';
import { ArtistComponent } from './artist.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { path: '', redirectTo: '/album', pathMatch: 'full' },
  { path: 'album',  component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}