import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor() {}

  ngOnInit() {
  }
}
