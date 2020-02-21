import {Component, OnInit} from '@angular/core';
import {feed} from './feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public feed = feed;
  public search = true;
  public sort = true;
  public transition = '';

  ngOnInit(): void {
  }

  isNumber($event: KeyboardEvent) {
    const charCode = $event.which ? $event.which : $event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
