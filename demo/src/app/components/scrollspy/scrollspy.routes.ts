import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdApiPage } from '../../shared/api-page/api-page.component';
import { NgbdExamplesPageComponent } from '../../shared/examples-page/examples-page.component';
import { NgbdScrollSpyOverviewComponent } from './overview/scrollspy-overview.component';
import { Routes } from '@angular/router';
import { NgbdScrollSpyBasic } from './demos/basic/scrollspy-basic';
import { NgbdScrollSpyNavbar } from './demos/navbar/scrollspy-navbar';
import { NgbdScrollSpyItems } from './demos/items/scrollspy-items';
import { NgbdScrollSpyNested } from './demos/nested/scrollspy-nested';
import { NgbdScrollSpyService } from './demos/service/scrollspy-service';
import { COMPONENT_DATA, ComponentData } from '../../tokens';

const DATA: ComponentData = {
	name: 'Scrollspy',
	bootstrapUrl: 'https://getbootstrap.com/docs/%version%/components/scrollspy/',
	overview: {
		service: 'Basic service',
		directive: 'Scrollspy directive',
		highlighting: 'Highlighting active items',
		customization: 'Customization',
	},
	demos: [
		{
			fragment: 'basic',
			title: 'Basic',
			type: NgbdScrollSpyBasic,
			code: 'scrollspy/demos/basic/scrollspy-basic.ts',
			markup: 'scrollspy/demos/basic/scrollspy-basic.html',
		},
		{
			fragment: 'items',
			title: 'Menu items',
			type: NgbdScrollSpyItems,
			code: 'scrollspy/demos/items/scrollspy-items.ts',
			markup: 'scrollspy/demos/items/scrollspy-items.html',
		},
		{
			fragment: 'service',
			title: 'Service',
			type: NgbdScrollSpyService,
			code: 'scrollspy/demos/service/scrollspy-service.ts',
			markup: 'scrollspy/demos/service/scrollspy-service.html',
		},
		{
			fragment: 'nested',
			title: 'Nested items',
			type: NgbdScrollSpyNested,
			code: 'scrollspy/demos/nested/scrollspy-nested.ts',
			markup: 'scrollspy/demos/nested/scrollspy-nested.html',
		},
		{
			fragment: 'navbar',
			title: 'Navbar',
			type: NgbdScrollSpyNavbar,
			code: 'scrollspy/demos/navbar/scrollspy-navbar.ts',
			markup: 'scrollspy/demos/navbar/scrollspy-navbar.html',
		},
	],
};

export const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'overview' },
	{
		path: '',
		component: ComponentWrapper,
		providers: [{ provide: COMPONENT_DATA, useValue: DATA }],
		children: [
			{ path: 'overview', component: NgbdScrollSpyOverviewComponent },
			{ path: 'examples', component: NgbdExamplesPageComponent },
			{ path: 'api', component: NgbdApiPage },
		],
	},
];
