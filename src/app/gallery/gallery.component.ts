import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IFeedItem} from '../../types/gallery';
import {MatDialog} from '@angular/material';
import {SlideShowGalleryComponent} from '../slide-show-gallery/slide-show-gallery.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  public sortMap = {byTitle: 'sort by title', byDate: 'sort by date'};
  public sortOptions = [this.sortMap.byTitle, this.sortMap.byDate];
  public numOfPages = [5, 10, 15, 20];
  public images: IFeedItem[] = [];
  public searchValue = '';
  public itemsPerPage = 5;
  public currentChunk = 0;
  public sortType = '';
  public filteredFeed: IFeedItem[] = [];

  @Input() feed: IFeedItem[];
  @Input() search = true;
  @Input() sort = true;
  @Input() transition = '';

  constructor(public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.search && !changes.search.firstChange && !changes.search.currentValue) {
      this.resetImages(this.itemsPerPage, true);
      this.searchValue = '';
      this.sortType = '';

    }
    if (changes && changes.sort && !changes.sort.firstChange && !changes.sort.currentValue) {
      this.resetImages(this.itemsPerPage);
      this.sortType = '';
    }
  }

  ngOnInit() {
    this.filteredFeed = this.feed;
    this.resetImages(this.itemsPerPage);
    for (let i = this.itemsPerPage; i < this.filteredFeed.length; i++) {
      const image = new Image();
      image.src = this.filteredFeed[i].url;
    }
  }

  resetImages(itemsPerPage: number, resetFilteredFeed: boolean = false): void {
    this.images = [];
    if (resetFilteredFeed) {
      this.filteredFeed = this.feed;
    }
    for (let i = 0; i < itemsPerPage && i < this.filteredFeed.length; i++) {
      this.images.push(this.filteredFeed[i]);
    }
    this.currentChunk = 0;
  }

  openImage(image: IFeedItem) {
    const images: string[] = [];
    const imgIndex = this.filteredFeed.indexOf(image);

    if (imgIndex === 0) {
      this.filteredFeed.forEach((feedItem: IFeedItem) => images.push(feedItem.url));
    } else {
      for (let i = imgIndex; i < this.filteredFeed.length; i++) {
        images.push(this.filteredFeed[i].url);
      }
      for (let i = 0; i < imgIndex; i++) {
        images.push(this.filteredFeed[i].url);
      }
    }

    this.dialog.open(SlideShowGalleryComponent, {width: '90%', height: '90%', data: {images, transition: this.transition}});
  }

  nextImages(nextOrPrevious: number) {
    const {itemsPerPage, filteredFeed} = this;
    this.images = [];
    if (nextOrPrevious < 0) {  // left
      this.currentChunk = (this.currentChunk - 1) >= 0 ? this.currentChunk - 1 : Math.ceil(filteredFeed.length / itemsPerPage) - 1;
      for (let i = this.currentChunk * itemsPerPage; i < (this.currentChunk + 1) * itemsPerPage && i < filteredFeed.length; i++) {
        this.images.push(filteredFeed[i]);
      }
    }

    if (nextOrPrevious > 0) { // right
      this.currentChunk = (this.currentChunk + 1) * this.itemsPerPage >= filteredFeed.length ? 0 : this.currentChunk + 1;
      for (let i = this.currentChunk * itemsPerPage; i < (this.currentChunk + 1) * itemsPerPage && i < filteredFeed.length; i++) {
        this.images.push(filteredFeed[i]);
      }
    }
  }

  sortFeed(sortType: any) {
    if (sortType === this.sortMap.byTitle) {
      this.filteredFeed.sort((f1: IFeedItem, f2: IFeedItem) => {
        if (f1.title < f2.title) {
          return -1;
        }
        if (f1.title > f2.title) {
          return 1;
        }
        return 0;
      });
    }
    if (sortType === this.sortMap.byDate) {
      this.filteredFeed.sort((f1: IFeedItem, f2: IFeedItem) => new Date(f1.date).getTime() - new Date(f2.date).getTime());
    }

    if (sortType === ' ') {
      this.searchValue = '';
    }
    this.resetImages(this.itemsPerPage);
  }

  searchImage(searchValue: string) {
    this.filteredFeed = this.feed;
    if (searchValue) {
      this.filteredFeed = this.filteredFeed.filter((feedItem: IFeedItem) => {
        return feedItem.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
    }
    this.resetImages(this.itemsPerPage);
  }

  deleteImage(image: IFeedItem) {
    this.filteredFeed = this.filteredFeed.filter((feedItem: IFeedItem) => feedItem.url !== image.url);
    this.feed = this.feed.filter((feedItem: IFeedItem) => feedItem.url !== image.url);
    this.images = this.images.filter((feedItem: IFeedItem) => feedItem.url !== image.url);
  }
}
