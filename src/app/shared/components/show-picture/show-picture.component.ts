import { Component, OnInit } from '@angular/core';
import { ShowPictureService } from '../../services/show-picture.service';

@Component({
  selector: 'app-show-picture',
  templateUrl: './show-picture.component.html',
  styleUrls: ['./show-picture.component.scss'],
})
export class ShowPictureComponent implements OnInit {
  imgUrl!: string;
  idx!: number;
  constructor(private showPictureService: ShowPictureService) {}
  ngOnInit(): void {
    this.imgUrl = this.showPictureService.imgUrl;
    this.idx = this.showPictureService.arr.findIndex(
      (arr) => arr.url_c === this.imgUrl
    );
  }
  next() {
    this.idx = this.idx + 1;
    if (this.idx > this.showPictureService.arr.length - 1) {
      this.idx = 0;
    }
    this.imgUrl = this.showPictureService.arr[this.idx].url_c;
  }

  previous() {
    this.idx = this.idx - 1;
    if (this.idx < 0) {
      this.idx = this.showPictureService.arr.length - 1;
    }
    this.imgUrl = this.showPictureService.arr[this.idx].url_c;
  }
}
