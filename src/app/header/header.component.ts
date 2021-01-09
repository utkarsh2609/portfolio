import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public overlayContainer: OverlayContainer) { }
    @HostBinding('class') componentCssClass: string = '';
    themes = Constants.themeNames;
    selectedTheme = this.themes[1].value;

    ngOnInit(): void {
        this.onSetTheme(this.themes[1].value);
    }

    onSetTheme(theme: string) {
        const classListLength = this.overlayContainer.getContainerElement().classList.length;
        if(classListLength === 2 ) {
            this.overlayContainer.getContainerElement().classList.contains(this.themes[0].value) ?
            this.overlayContainer.getContainerElement().classList.replace(this.themes[0].value, this.themes[1].value) :
            this.overlayContainer.getContainerElement().classList.replace(this.themes[1].value, this.themes[0].value)

        } else {
            this.overlayContainer.getContainerElement().classList.add(theme);
        }
        this.componentCssClass = theme;
    }

}
