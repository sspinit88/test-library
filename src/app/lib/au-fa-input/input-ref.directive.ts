import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'app-au-fa-input input', // хитро переименовываем директиву
})
export class InputRefDirective {

  focus = false;

  constructor() {
  }

  @HostListener('focus') // благодаря названию селектор , будем получать данные при фокусе и т.д.
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
