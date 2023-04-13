import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

/** @title Date range picker comparison ranges */
@Component({
  selector: 'date-range-picker-comparison-example',
  templateUrl: 'date-range-picker-comparison-example.html',
  styleUrls: ['date-range-picker-comparison-example.css'],
})
export class DateRangePickerComparisonExample {
  dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dateForm = this.formBuilder.group({
      dataInicial: [''],
      dataFinal: [''],
    });
  }

  dateFilter: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    const dataFinal = this.dateForm.get('dataInicial')?.value;
    if (!dataFinal || !date) {
      return true;
    }
    return date >= dataFinal;
  };
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
