import {Directive, forwardRef, Optional} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION, tuiArrayToggle} from '@taiga-ui/cdk';
import type {TuiDataListHost} from '@taiga-ui/core';
import {TUI_DATA_LIST_HOST, tuiAsOptionContent} from '@taiga-ui/core';
import {TuiMultiSelectOptionComponent} from '@taiga-ui/legacy/components/multi-select-option';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiMultiSelectComponent} from '../multi-select.component';

export const TUI_MULTI_SELECT_OPTION = new PolymorpheusComponent(
    TuiMultiSelectOptionComponent,
);

@Directive({
    selector: '[tuiMultiSelectGroup]',
    providers: [
        tuiAsOptionContent(TUI_MULTI_SELECT_OPTION),
        {
            provide: TUI_DATA_LIST_HOST,
            deps: [
                NgControl,
                [new Optional(), forwardRef(() => TuiMultiSelectComponent)],
            ],
            useFactory: <T>(
                control: NgControl,
                host: TuiDataListHost<T> | null,
            ): TuiDataListHost<T> =>
                host || {
                    handleOption: option =>
                        control.control?.setValue(
                            tuiArrayToggle(control.value || [], option),
                        ),
                },
        },
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useValue: {
                writeValue: EMPTY_FUNCTION,
                registerOnChange: EMPTY_FUNCTION,
                registerOnTouched: EMPTY_FUNCTION,
            },
        },
    ],
})
export class TuiMultiSelectGroupDirective {}
