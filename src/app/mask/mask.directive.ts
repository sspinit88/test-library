import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as mk from './mask.utils';
import { maskDigitValidators, neverValidator } from './mask.utils';

@Directive({
  selector: '[d-mask]'
})
export class MaskDirective implements OnInit {

  input: HTMLInputElement;
  fullFieldSelected: boolean = false;

  @Input('d-mask') mask: string = '';

  constructor(
    private _elRef: ElementRef, // получаем ссылку на элемент, к которому применяется директива
  ) {
    this.input = this._elRef.nativeElement;
  }

  ngOnInit(): void {
    this.input.value = this.buildPlaceholder();
  }

  @HostListener('select', ['$event'])
  onSelect(e: UIEvent) {
    this.fullFieldSelected = this.input.selectionStart === 0 && this.input.selectionEnd === this.input.value.length;
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown(e: KeyboardEvent, keyCode: number) {
    // ctrl + c
    if (e.metaKey || e.ctrlKey) {
      // console.log('File: mask.directive.ts, Line: 34, e.metaKey():', e.metaKey)
      // console.log('File: mask.directive.ts, Line: 35, e.ctrlKey():', e.ctrlKey)
      return;
    }

    if (keyCode !== mk.keyCodes.TAB) {
      e.preventDefault();
    }

    const
      key = String.fromCharCode(keyCode);

    if (this.fullFieldSelected) {
      this.input.value = this.buildPlaceholder();

      // const
      //   firstPlaceholderPosition = this.findFirstChar(this.input.value, )

      this.input.setSelectionRange(2, 2);
    }

    const
      cursorPosition = this.input.selectionStart;

    switch (keyCode) {
      case mk.keyCodes.LEFT_ARROW:
        this.handleLeftArrow(cursorPosition);
        return;
      case mk.keyCodes.RIGHT_ARROW:
        this.handleRightArrow(cursorPosition);
        return;
      case mk.keyCodes.BACKSPACE:
        this.handleBackspace(cursorPosition);
        return;
      case mk.keyCodes.DELETE:
        this.handleDelete(cursorPosition);
        return;
    }

    const
      maskDigit = this.mask.charAt(cursorPosition);

    const
      digitValidator = maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      this.overWriteCharAtPosition(this.input, cursorPosition, key);
      this.handleRightArrow(cursorPosition);
    }
  }

  buildPlaceholder(): string {
    const
      chars = this.mask.split('');

    return chars.reduce((result, char) => {
      return result += this.includes(mk.SPECIAL_CHARACTERS, char);
    }, '');
  }

  handleLeftArrow(cursorPosition: number): void {
    const
      previousPosition = this.calculatePreviousCursorPos(cursorPosition);

    if (previousPosition >= 0) {
      this.input.setSelectionRange(previousPosition, previousPosition);
    }
  }

  handleRightArrow(cursorPosition: number): void {
    const
      nextPosition = this.calculateNextCursorPos(cursorPosition);

    if (nextPosition >= 0) {
      const
        newCursorPosition = cursorPosition + nextPosition + 1;

      this.input.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }

  handleBackspace(cursorPosition: number): void {
    const
      previousPosition = this.calculatePreviousCursorPos(cursorPosition);

    if (previousPosition >= 0) {
      this.overWriteCharAtPosition(this.input, previousPosition, '_');
      this.input.setSelectionRange(previousPosition, previousPosition);
    }
  }

  // FIXME удаляет до бесконечности
  handleDelete(cursorPosition): void {
    // FIXME удаляет до бесконечности
    const
      nextPosition = this.calculateNextCursorPos(cursorPosition);


    if (nextPosition >= 0) {
      const
        newCursorPosition = cursorPosition + nextPosition + 1;
      this.overWriteCharAtPosition(this.input, cursorPosition, '_');
      this.input.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }

  calculatePreviousCursorPos(cursorPosition): number {
    const
      valueBeforeCursor = this.input.value.slice(0, cursorPosition);

    return this.findPreviousPosition(valueBeforeCursor, mk.SPECIAL_CHARACTERS);
  }

  calculateNextCursorPos(cursorPosition): number {
    const
      valueAfterCursor = this.input.value.slice(cursorPosition + 1);

    return this.findNextPosition(valueAfterCursor, mk.SPECIAL_CHARACTERS);

  }

  overWriteCharAtPosition(input: HTMLInputElement, cursorPosition: number, key: string): void {
    const
      currentValue = input.value;
    // перезаписываем значение
    input.value = currentValue.slice(0, cursorPosition) + key + currentValue.slice(cursorPosition + 1);
  }

  includes(itemArray: any[], char: string): string {
    const
      array = itemArray.slice();

    return array.some(el => el === char) ? char : '_';
  }

  findPreviousPosition(str: string, special: Array<string>): number {
    const
      array = str.split('');
    const
      char = array[array.length - 1];
    const
      bool = special.some(el => el === char);

    if (bool) {
      return array.length - 2;
    }

    return array.length - 1;
  }

  findNextPosition(str: string, special: Array<string>): number {
    // console.log('File: mask.directive.ts, Line: 185, str():', str.length);

    const
      array = str.split('');
    const
      char = array.reverse()[array.length - 1];
    const
      bool = special.some(el => el === char);
    // console.log('File: mask.directive.ts, Line: 193, char():', char);
    // console.log('File: mask.directive.ts, Line: 194, bool():', bool);
    if (bool) {
      return array.length - array.length + 1;
    }

    return array.length - array.length;
  }
}
