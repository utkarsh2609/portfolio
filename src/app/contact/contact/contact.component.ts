import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { Constants } from 'src/app/shared/constants';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    homePagePicture = Constants.themeImages.HARRY_CONTACT;
    githubUrl = Constants.profileUrls.GITHUB_URL;
    linkedInUrl = Constants.profileUrls.LINKED_IN_URL;
    gmailUrl = Constants.profileUrls.G_MAIL_URL;
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
        this.homePagePicture = isCurrentThemeHarryPotter ? Constants.themeImages.HARRY_CONTACT : Constants.themeImages.BATMAN_CONTACT;
    }

    openUrl(url: string) {
        if (url === this.gmailUrl) {
            window.location.href = url;
            return;
        }
        window.open(url, '_blank');
    }
}
