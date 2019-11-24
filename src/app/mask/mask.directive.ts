import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as mk from './mask.utils';


@Directive({
  selector: '[mask]'
})
export class MaskDirective implements OnInit {

  input: HTMLInputElement;

  @Input() mask = 'mask';

  constructor(
    private _elRef: ElementRef, // получаем ссылку на элемент, к которому применяется директива
  ) {
    this.input = this._elRef.nativeElement;
  }

  ngOnInit(): void {
  }

}
