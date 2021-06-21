import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCustomComponent } from './slider-custom/slider-custom.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';





@NgModule({
    declarations: [
        SliderCustomComponent
    ],
    exports: [
        SliderCustomComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        MatInputModule,
        MatCardModule,
        FormsModule
    ]
})
export class SharedModule { }
