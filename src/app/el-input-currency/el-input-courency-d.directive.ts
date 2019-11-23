import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'el-input-currency-wrap input'
})
export class ElInputCourencyDDirective {

  focused: boolean = false;

  constructor() { }

  @HostListener('focus')
  private _setFocus(): void {
    this.focused = true;
  }

  @HostListener('blur')
  private _removeFocus(): void {
    this.focused = false;
  }

}
