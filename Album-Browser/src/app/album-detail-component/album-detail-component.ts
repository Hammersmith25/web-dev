import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album, AlbumService } from '../album.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail-component',
  imports: [AsyncPipe, RouterLink, FormsModule],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  currAlbum$!: Observable<Album>;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currAlbum$ = this.albumService.getAlbum(id);
  }

  save(album: Album): void {
    this.currAlbum$ = this.albumService.updateAlbum(album);
  }
}
