import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { AlbumsComponent } from './albums-component/albums-component';
import { AlbumDetailComponent } from './album-detail-component/album-detail-component';
import { AlbumPhotosComponent } from './album-photos-component/album-photos-component';
import { Test } from './test/test';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component:HomeComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Albums', component:AlbumsComponent},
    {path: 'Albums/:id', component:AlbumDetailComponent},
    {path: 'Album/:id/Photos', component:AlbumPhotosComponent},
    {path: 'Test', component:Test}
];
