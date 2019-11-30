import { Directive, HostListener, Renderer2, ElementRef, AfterViewInit, AfterContentInit, OnInit, } from '@angular/core';
import { RE_CURRENCY, RE_FORMAT_NUMBER } from '../constants/regexp.constants';


@Directive({
  selector: '[d-format]'
})
export class ElInputCourencyDDirective implements OnInit, AfterContentInit, AfterViewInit {

  input: HTMLInputElement;
  viewer: HTMLInputElement;
  focused: boolean = false;


  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2,
  ) {
    this.input = this._elRef.nativeElement;
  }

  ngOnInit(): void {
    this.getViewer();
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

  @HostListener('input')
  formatInputValue() {
    const inputValue = this.input.value.replace(RE_FORMAT_NUMBER, '').substring(0, 9);

    this.viewer.value = inputValue.replace(RE_CURRENCY, '$1 ');

    this.input.value = inputValue;

    // const value = inputValue.replace(/\s+/g, '')
  }

  addInputClass(): void {
    if (!this.input) {
      return;
    }

    this._renderer.addClass(this.input, 'content-input');
  }

  getViewer(): void {
    this.viewer = this.input.closest('div.el-content').querySelector('.el-view');
  }

}

