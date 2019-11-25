import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[elModalOpenOnClick]'
})
export class ElModalOpenOnClickDirective {

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _renderer: Renderer2,
  ) {
  }

  @Input()
  set elModalOpenOnClick(els) {

    let elements: HTMLBaseElement[];

    if (els.length) {
      elements = els;
    } else {
      elements = [els];
    }

    elements.forEach(el => {
      // при клике будет появляться модальное окно
      el.addEventListener('click', () => {
        this._viewContainer.clear();
        this._viewContainer.createEmbeddedView(this._templateRef);
      });
    });
  }
}
