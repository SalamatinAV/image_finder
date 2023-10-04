import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Photo } from '../models/pictureList.model';

@Injectable({
  providedIn: 'root',
})
export class ShowPictureService {
  imgUrl: string = '';

  arr!: Photo[];

  showPictureFlag$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  showPicture(url: string, arr: Photo[]) {
    this.arr = arr;
    this.imgUrl = url;
    this.showPictureFlag$.next(true);
  }

  removePicture(ev: MouseEvent) {
    // if ((ev.target as HTMLElement).tagName === 'DIV') {
    //   this.showPictureFlag$.next(false);
    // }
    if ((ev.target as HTMLElement).classList.contains('photo')) {
      this.showPictureFlag$.next(false);
    }
  }
}
