import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule
    ],
    exports: [
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule
    ]
})
export class MaterialModule { }
