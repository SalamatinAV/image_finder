import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/pictureList.model';
import { ImageFinderService } from '../../services/image-finder.service';
import { ShowPictureService } from '../../services/show-picture.service';

@Component({
  selector: 'app-saved-pictures',
  templateUrl: './saved-pictures.component.html',
  styleUrls: ['./saved-pictures.component.scss'],
})
export class SavedPicturesComponent implements OnInit {
  public savedImages: Photo[] = [];

  constructor(
    private imageFinderService: ImageFinderService,
    private showPictureService: ShowPictureService
  ) {}

  ngOnInit(): void {
    this.savedImages = this.imageFinderService.savedImages;
    const getItem: any = localStorage.getItem('SaveIMG');
    this.savedImages = JSON.parse(getItem);
  }
  public deleteImage(idx: number) {
    this.savedImages.splice(idx, 1);
    localStorage.setItem('SaveIMG', JSON.stringify(this.savedImages));
  }

  showPicture(url: string, arr: Photo[]) {
    this.showPictureService.showPicture(url, arr);
  }
}
