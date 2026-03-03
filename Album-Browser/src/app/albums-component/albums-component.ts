import { Component, OnInit, inject } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { signal } from '@angular/core';
import { AlbumService, Album } from '../album.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums-component',
  imports: [NavBar, AsyncPipe, RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$: Observable<Album[]> = this.albumsSubject.asObservable();

  isLoading = signal(true);

  ngOnInit(): void {
  this.isLoading.set(true);
  this.albumService.getAlbums().subscribe({
    next: (albums) => {
      this.albumsSubject.next(albums);
      this.isLoading.set(false);
    },
    error: () => {
      this.isLoading.set(false);
    }
  });
}

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albumsSubject.next(
        this.albumsSubject.value.filter((album) => album.id !== id)
      );
    });
  }
}