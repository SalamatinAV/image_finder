import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { ImageSearchComponent } from './shared/components/image-search/image-search.component';
import { SavedPicturesComponent } from './shared/components/saved-pictures/saved-pictures.component';
import { ShowPictureComponent } from './shared/components/show-picture/show-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    SavedPicturesComponent,
    ShowPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    NgbPaginationModule,
    MatButtonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
