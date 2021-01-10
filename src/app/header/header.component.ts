import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeSwitchService } from '../services/theme-switch.service';
import { Constants } from '../shared/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @HostBinding('class') componentCssClass: string = '';
    themes = Constants.themeNames;
    selectedTheme = this.themes[1].value;

    constructor(
        public overlayContainer: OverlayContainer,
        private themeSwitchService: ThemeSwitchService
        ) { }

    ngOnInit(): void {
        this.onSetTheme(this.themes[1].value);
    }

    onSetTheme(theme: string) {
        console.log('themeUP', theme)
        const classListLength = this.overlayContainer.getContainerElement().classList.length;
        if(classListLength === 2 ) {
            this.overlayContainer.getContainerElement().classList.contains(this.themes[0].value) ?
            this.overlayContainer.getContainerElement().classList.replace(this.themes[0].value, this.themes[1].value) :
            this.overlayContainer.getContainerElement().classList.replace(this.themes[1].value, this.themes[0].value)

            // this.themeSwitchService.updateBodyClass('batman-background');
        } else {
            this.overlayContainer.getContainerElement().classList.add(theme);
        }
        this.componentCssClass = theme;
        this.themeSwitchService.currentTheme.next(theme);
    }

}
