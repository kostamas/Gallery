import {Component, OnInit} from '@angular/core';
import {feed} from './feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gallery';
  feed = feed;

  ngOnInit(): void {

  }
}
