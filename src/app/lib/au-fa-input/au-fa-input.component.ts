import { AfterContentInit, AfterViewInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.styl']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input() icon: string;
  @Input() placeholder: string = '';

  @ContentChild(InputRefDirective, { static: false }) input: InputRefDirective; // доступ к директиве

  constructor() {
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('the app-au-fa-input needs an input inside its content');
    }
  }

  get classes() {
    const cssClasses = {
      'fa': true,
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
