import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  homePagePicture = Constants.themeImages.HARRY_HOME;
  homePageTitle =  Constants.homePageTitles.HARRY_TITLE;
  homePageBody =  Constants.homePageBody.HARRY_BODY;

  constructor() { }

  ngOnInit(): void {
  }

}
