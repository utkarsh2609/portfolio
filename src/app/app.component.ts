import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  // constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    // this.themeService.setTheme("deeppurple-amber");
  }
}
