import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeSwitchService } from './services/theme-switch.service';
import { Constants } from './shared/constants';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @HostBinding('class') componentCssClass: string = '';
    isCurrentThemeHarry = false;


    constructor(
        @Inject(DOCUMENT) private document: any,
        private renderer: Renderer2,
        public overlayContainer: OverlayContainer,
        private themeSwitchService: ThemeSwitchService
    ) { }

    ngOnInit() {
        this.themeSwitchService.currentTheme.subscribe(theme => {
            const currentBodyClass = Constants.themeNames.find(themeItem => themeItem.value === theme)?.bodyClass;
            console.log('current', theme, currentBodyClass);
            this.isCurrentThemeHarry = theme === Constants.themeNames[1].value;
            this.updateBodyClass(currentBodyClass);
        })
    }

    private updateBodyClass(customBodyClass?: string) {
        this.renderer.setAttribute(this.document?.body, 'class', '');
        if (customBodyClass) {
            this.renderer.addClass(this.document?.body, customBodyClass);
        }
    }
}
