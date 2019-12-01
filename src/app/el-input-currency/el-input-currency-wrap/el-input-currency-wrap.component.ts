import { Component, Input, AfterContentInit, ContentChild, HostBinding, ViewChild } from '@angular/core';
import { ElInputCourencyDDirective } from '../el-input-courency-d.directive';
import { RE_CURRENCY, RE_FORMAT_NUMBER } from '../../constants/regexp.constants';

@Component({
  selector: 'el-input-currency-wrap',
  templateUrl: './el-input-currency-wrap.component.html',
  styleUrls: ['./el-input-currency-wrap.component.css']
})
export class ElInputCurrencyWrapComponent implements AfterContentInit {

  @ViewChild('content', { static: false }) content;

  @Input() label: string = null;

  @ContentChild(ElInputCourencyDDirective, { static: false }) input: ElInputCourencyDDirective;

  constructor() {
  }

  @HostBinding('class.el-focused')
  get inputFocused(): boolean {
    return this.input ? this.input.focused : false;
  }


  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('Отсутствует контент в el-input-currency-wrap');
    }

  }

  formatValue(el: HTMLInputElement): void {
    const inputValue = el.value.replace(RE_FORMAT_NUMBER, '').substring(0, 9);

    el.value = inputValue.replace(RE_CURRENCY, '$1 ');

    this.input.formatInputValue(el.value);
  }
}
