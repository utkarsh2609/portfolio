import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeSwitchService {
    // private renderer!: Renderer2;
    public currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>('');
    // constructor(
    //     @Inject(DOCUMENT) private document: any,
    //     rendererFactory: RendererFactory2
    // ) {
    //     this.renderer = rendererFactory.createRenderer(null, null);
    // }

    // updateBodyClass(customBodyClass?: string) {
    //     this.renderer.setAttribute(this.document?.body, 'class', '');
    //     if (customBodyClass) {
    //         this.renderer.addClass(this.document?.body, customBodyClass);
    //     }
    // }
}
