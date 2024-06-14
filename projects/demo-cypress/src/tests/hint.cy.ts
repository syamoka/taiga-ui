import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiHintDirective, TuiRootComponent} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import type {MountResponse} from 'cypress/angular';

describe('TuiHint', () => {
    let component: TestComponent;
    let wrapper: MountResponse<TestComponent>;

    @Component({
        standalone: true,
        selector: 'my-host',
        imports: [NgIf],
        template: `
            <ng-container *ngIf="!hideElement">
                <ng-content></ng-content>
            </ng-container>
        `,
    })
    class HostComponent {
        @Input()
        public hideElement = false;
    }

    @Component({
        standalone: true,
        imports: [TuiRootComponent, HostComponent, TuiHintDirective],
        template: `
            <tui-root>
                <my-host [hideElement]="hide">
                    <button tuiHint="hint">button</button>
                </my-host>
            </tui-root>
        `,
    })
    class TestComponent {
        public hide = false;
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [NoopAnimationsModule, HostComponent],
                providers: [NG_EVENT_PLUGINS],
            })
            .then(wrap => {
                component = wrap.component;
                wrapper = wrap;
            }),
    );

    it('hint should hidden when detached from dom', () => {
        cy.get('button').trigger('mouseenter');
        cy.get('tui-hint')
            .should('exist')
            .then(() => {
                component.hide = true;
                wrapper.fixture.detectChanges();

                cy.get('tui-hint').should('not.exist');
            });
    });
});
