import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(public overlayContainer: OverlayContainer) {}
  @HostBinding('class') componentCssClass: string = '';

  ngOnInit() {
    // this.themeService.setTheme("deeppurple-amber");
  }
  onSetTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
