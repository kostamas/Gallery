import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SlideShowGalleryComponent} from './slide-show-gallery/slide-show-gallery.component';

import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SlideShowGalleryComponent
  ],
  entryComponents: [SlideShowGalleryComponent],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
