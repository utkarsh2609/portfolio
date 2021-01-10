import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeSwitchService } from './services/theme-switch.service';
import { Constants } from './shared/constants';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';
    constructor(
        @Inject(DOCUMENT) private document: any,
        private renderer: Renderer2,
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
}
