import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule
    ],
    exports: [
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
