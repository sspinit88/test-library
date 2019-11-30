import { Directive, HostListener, Renderer2, ElementRef, AfterViewInit, AfterContentInit, } from '@angular/core';


@Directive({
  selector: '[d-format]'
})
export class ElInputCourencyDDirective implements AfterContentInit, AfterViewInit {

  input: HTMLInputElement;
  focused: boolean = false;


  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2,
  ) {
    this.input = this._elRef.nativeElement;
  }

  ngAfterContentInit(): void {
    this.addInputClass();
  }

  ngAfterViewInit(): void {
    this.formatInputValue();
  }

  @HostListener('focus')
  private _setFocus(): void {
    this.focused = true;
  }

  @HostListener('blur')
  private _removeFocus(): void {
    this.focused = false;
  }

  formatInputValue(str?: string) {
    if (!str) {
      return;
    }

    this.input.value = str.replace(/\s+/g, '');

    // console.log('Line - 46, this.input:', this.input)
  }

  addInputClass(): void {
    if (!this.input) {
      return;
    }

    this._renderer.addClass(this.input, 'content-input');
  }

}

