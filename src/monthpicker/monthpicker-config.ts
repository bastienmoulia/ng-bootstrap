import { Injectable, TemplateRef } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgbMonthStruct } from './ngb-month-struct';

/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
@Injectable({ providedIn: 'root' })
export class NgbMonthpickerConfig {
	dayTemplate: TemplateRef<DayTemplateContext>;
	dayTemplateData: (date: NgbMonthStruct, current?: { year: number; month: number }) => any;
	footerTemplate: TemplateRef<any>;
	displayMonths = 1;
	firstDayOfWeek = 1;
	markDisabled: (date: NgbMonthStruct, current?: { year: number; month: number }) => boolean;
	minDate: NgbMonthStruct;
	maxDate: NgbMonthStruct;
	navigation: 'select' | 'arrows' | 'none' = 'select';
	outsideDays: 'visible' | 'collapsed' | 'hidden' = 'visible';
	showWeekNumbers = false;
	startDate: { year: number; month: number };
	weekdays: TranslationWidth | boolean = TranslationWidth.Short;
}
