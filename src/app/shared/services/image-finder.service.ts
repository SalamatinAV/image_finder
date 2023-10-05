import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, pipe } from 'rxjs';
import { Photo } from '../models/pictureList.model';

@Injectable({
  providedIn: 'root',
})
export class ImageFinderService {
  savedPage!: number;
  savedSearchControl: string = '';

  public savedImages: Photo[] = [];

  constructor(private http: HttpClient) {}

  imageFinder(search: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e72fccf439966687886c5199281c242&tags=${search}&extras=url_c&format=json&nojsoncallback=1`
    );
    // .pipe(delay(500));
  }

  savedImage(item: Photo) {
    const local: any = localStorage.getItem('SaveIMG');
    if (local !== null) {
      this.savedImages = JSON.parse(local);
    }
    // if (this.savedImages !== null && this.savedImages.includes(item)) {
    this.savedImages.unshift(item);
    localStorage.setItem('SaveIMG', JSON.stringify(this.savedImages));
    // }
  }
}
