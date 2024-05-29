import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiNumberFormatDirective,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiRadioListComponent} from '@taiga-ui/kit';
import {TuiInputRangeModule, TuiInputSliderModule} from '@taiga-ui/legacy';

import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {TuiInputSliderExample1} from './examples/1';
import {TuiInputSliderExample2} from './examples/2';
import {TuiInputSliderExample3} from './examples/3';
import {TuiInputSliderExample4} from './examples/4';
import {TuiInputSliderExample5} from './examples/5';
import {ExampleTuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        TuiInputRangeModule,
        TuiInputSliderModule,
        InheritedDocumentationComponent,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiRadioListComponent,
        TuiButtonDirective,
        TuiHint,
        TuiAddonDoc,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiNotificationComponent,
        TuiTextfieldControllerModule,
        TuiNumberFormatDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputSliderComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiInputSliderComponent,
        TuiInputSliderExample1,
        TuiInputSliderExample2,
        TuiInputSliderExample3,
        TuiInputSliderExample4,
        TuiInputSliderExample5,
    ],
    exports: [ExampleTuiInputSliderComponent],
})
export class ExampleTuiInputSliderModule {}
