import { Component, Input, AfterContentInit, ContentChild, HostBinding,  } from '@angular/core';
import { ElInputCourencyDDirective } from '../el-input-courency-d.directive';

@Component({
  selector: 'el-input-currency-wrap',
  templateUrl: './el-input-currency-wrap.component.html',
  styleUrls: ['./el-input-currency-wrap.component.css']
})
export class ElInputCurrencyWrapComponent implements AfterContentInit {

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
}
