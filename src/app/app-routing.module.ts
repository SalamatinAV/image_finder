import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageSearchComponent } from './shared/components/image-search/image-search.component';
import { SavedPicturesComponent } from './shared/components/saved-pictures/saved-pictures.component';
import { ImageFinderService } from './shared/services/image-finder.service';

const routes: Routes = [
  { path: '', redirectTo: 'imageSearch', pathMatch: 'full' },
  { path: 'imageSearch', component: ImageSearchComponent },
  { path: 'savedPictures', component: SavedPicturesComponent },
  { path: '**', component: ImageSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [ImageFinderService],
})
export class AppRoutingModule {}
