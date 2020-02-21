import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideShowGalleryComponent } from './slide-show-gallery.component';
import {CommonModule} from '@angular/common';

describe('GalleryComponent', () => {
  let component: SlideShowGalleryComponent;
  let fixture: ComponentFixture<SlideShowGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
      ],
      declarations: [ SlideShowGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowGalleryComponent);
    component = fixture.componentInstance;
    component.imagesPaths =[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
