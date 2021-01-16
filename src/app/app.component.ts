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
    // title = 'portfolio';
    // themes = Constants.themeNames;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private renderer: Renderer2,
        public overlayContainer: OverlayContainer,
        private themeSwitchService: ThemeSwitchService
    ) { }

    ngOnInit() {
        // this.renderer.addClass('body', 'harry-background');
        // this.updateBodyClass('harry-background');
        this.themeSwitchService.currentTheme.subscribe(theme => {
            const currentBodyClass = Constants.themeNames.find(themeItem => themeItem.value === theme)?.bodyClass;
            console.log('current', theme, currentBodyClass);
            this.updateBodyClass(currentBodyClass);
        })
        // this.themeSwitchService.updateBodyClass('harry-background');
    }

    private updateBodyClass(customBodyClass?: string) {
        this.renderer.setAttribute(this.document?.body, 'class', '');
        if (customBodyClass) {
            this.renderer.addClass(this.document?.body, customBodyClass);
        }
    }

    // onSetTheme(theme: string) {
    //     console.log('themeUP', theme)
    //     const classListLength = this.overlayContainer.getContainerElement().classList.length;
    //     if(classListLength === 2 ) {
    //         this.overlayContainer.getContainerElement().classList.contains(this.themes[0].value) ?
    //         this.overlayContainer.getContainerElement().classList.replace(this.themes[0].value, this.themes[1].value) :
    //         this.overlayContainer.getContainerElement().classList.replace(this.themes[1].value, this.themes[0].value)

    //         // this.themeSwitchService.updateBodyClass('batman-background');
    //     } else {
    //         this.overlayContainer.getContainerElement().classList.add(theme);
    //     }
    //     this.componentCssClass = theme;
    //     this.themeSwitchService.currentTheme.next(theme);
    // }
}
