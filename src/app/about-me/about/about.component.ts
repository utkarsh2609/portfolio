import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { Constants } from 'src/app/shared/constants';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    homePagePicture = Constants.themeImages.HARRY_ABOUT;
    homePageTitle = Constants.homePageTitles.HARRY_TITLE;
    homePageBody = Constants.homePageBody.HARRY_BODY;
    isCurrentThemeHarry = false;

    constructor(
        private themeSwitchService: ThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.themeSwitchService.currentTheme.subscribe(theme => {
            this.isCurrentThemeHarry = theme === Constants.themeNames[1].value;
            this.setContentofHomePage(this.isCurrentThemeHarry);
        })
    }

    setContentofHomePage(isCurrentThemeHarryPotter: boolean) {
        this.homePagePicture = isCurrentThemeHarryPotter ? Constants.themeImages.HARRY_ABOUT : Constants.themeImages.BATMAN_ABOUT;
        this.homePageTitle = isCurrentThemeHarryPotter ? Constants.homePageTitles.HARRY_TITLE : Constants.homePageTitles.BATMAN_TITLE;
        this.homePageBody = isCurrentThemeHarryPotter ? Constants.homePageBody.HARRY_BODY : Constants.homePageBody.BATMAN_BODY;
    }

}
