import { Component, OnInit } from '@angular/core';
import { ShowPictureService } from './shared/services/show-picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'image-search';

  showPictureFlag!: boolean;

  constructor(private showPictureService: ShowPictureService) {}

  ngOnInit(): void {
    this.showPictureService.showPictureFlag$.subscribe((value) => {
      this.showPictureFlag = value;
    });
  }

  removePicture(ev: MouseEvent) {
    this.showPictureService.removePicture(ev);
  }
}
