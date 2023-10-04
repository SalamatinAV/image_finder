import { Component, OnInit } from '@angular/core';
import { ImageFinderService } from '../../services/image-finder.service';
import { Photo } from '../../models/pictureList.model';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { ShowPictureService } from '../../services/show-picture.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss'],
})
export class ImageSearchComponent implements OnInit {
  loading: boolean = false;
  page: number = 1;

  searchControl: FormControl = new FormControl('');

  imageFinder: Photo[] = [];

  constructor(
    private imageFinderService: ImageFinderService,
    private showPictureService: ShowPictureService
  ) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(600),
        map((str: string) => str.trim()),
        tap((str) => {
          this.loading = true;
          if (!str) {
            this.loading = false;
            this.imageFinderService.savedSearchControl = '';
            this.imageFinder = [];
          }
        }),
        filter((str) => str !== ''),
        switchMap((str: string) => this.imageFinderService.imageFinder(str))
      )
      .subscribe((imageFinder: any) => {
        this.loading = false;
        // =====================
        if (
          this.imageFinderService.savedSearchControl !==
          this.searchControl.value
        )
          this.page = 1;
        this.imageFinderService.savedSearchControl = this.searchControl.value;
        // ===========================
        this.imageFinder = imageFinder.photos.photo;
        this.imageFinder.forEach((photo) => {
          if (photo.url_c === undefined) {
            this.imageFinder = this.imageFinder.filter(
              (n) => n.url_c !== photo.url_c
            );
          }
          if (photo.title === '') {
            photo.title = '*******';
          }
          photo.flag = false;
          const getItem: any = localStorage.getItem('SaveIMG');
          this.imageFinderService.savedImages = JSON.parse(getItem);
          this.imageFinderService.savedImages.forEach((saved) => {
            if (saved.url_c === photo.url_c) {
              photo.flag = true;
            }
          });
        });
      });

    this.checkSavedValue();
  }

  checkSavedValue(): void {
    if (this.imageFinderService.savedSearchControl) {
      this.page = this.imageFinderService.savedPage;
      this.searchControl.setValue(this.imageFinderService.savedSearchControl);
    }
  }

  savedImage(item: Photo) {
    item.flag = true;
    this.imageFinderService.savedImage(item);
  }

  pagination(event: number) {
    this.page = event;
    this.imageFinderService.savedPage = event;
  }

  showPicture(url: string, arr: Photo[]) {
    this.showPictureService.showPicture(url, arr);
  }
}
