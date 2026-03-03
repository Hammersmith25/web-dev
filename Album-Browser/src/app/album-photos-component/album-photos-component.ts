import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlbumService, Photo } from '../album.service';

@Component({
  selector: 'app-album-photos-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  albumId!: number;
  photos$!: Observable<Photo[]>;

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.albumService.getAlbumPhotos(this.albumId);
  }
}
