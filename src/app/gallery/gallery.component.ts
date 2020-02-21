import {Component, Input, OnInit} from '@angular/core';
import {IGallery} from '../../types/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public sortOptions = ['sort by title', 'sort by date'];
  public numOfPages = [5, 10, 15, 20];
  public itemsPerPage = 5;
  public searchValue = '';
  public images: IGallery[] = [];

  @Input() feed: IGallery[];

  constructor() {
  }

  ngOnInit() {
    this.onItemsPerPageChange(this.itemsPerPage);
    for (let i = this.itemsPerPage; i < this.feed.length; i++) {
      const image = new Image();
      image.src = this.feed[i].url;
    }
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.images = [];
    for (let i = 0; i < itemsPerPage; i++) {
      this.images.push(this.feed[i]);
    }
  }
}
