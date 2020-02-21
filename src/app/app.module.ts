import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SlideShowGalleryComponent} from './slide-show-gallery/slide-show-gallery.component';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SlideShowGalleryComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
