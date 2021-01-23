import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { Constants } from 'src/app/shared/constants';
import { FeaturedProjects, Projects } from 'src/app/shared/project.data';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    objectKeys = Object.keys;
    isCurrentThemeHarry = false;
    featuredProjects: any;
    otherProjects: any;

    constructor(
        private themeSwitchService: ThemeSwitchService
    ) { }

    ngOnInit(): void {
        this.getProjects();
        this.themeSwitchService.currentTheme.subscribe(theme => {
            this.isCurrentThemeHarry = theme === Constants.themeNames[1].value;
            // this.setContentofHomePage(this.isCurrentThemeHarry);
        })
    }

    getProjects() {
        this.featuredProjects = FeaturedProjects;
        this.otherProjects = Projects;
        console.log('FEATURING', this.otherProjects)
    }

    openApplication(url: string) {
        window.open(url, '_blank');
    }

    // setContentofHomePage(isCurrentThemeHarryPotter: boolean) {
    //     this.homePagePicture = isCurrentThemeHarryPotter ? Constants.themeImages.HARRY_HOME : Constants.themeImages.BATMAN_HOME;
    //     this.homePageTitle = isCurrentThemeHarryPotter ? Constants.homePageTitles.HARRY_TITLE : Constants.homePageTitles.BATMAN_TITLE;
    //     this.homePageBody = isCurrentThemeHarryPotter ? Constants.homePageBody.HARRY_BODY : Constants.homePageBody.BATMAN_BODY;
    //   }

}
