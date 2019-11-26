import {
  ContentChild,
  Directive,
  Input, OnDestroy, OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@Directive({
  selector: '[elModalOpenOnClick]'
})
export class ElModalOpenOnClickDirective implements OnInit, OnDestroy {

  elements: HTMLBaseElement[];

  @ContentChild(ModalComponent, { static: false }) modal: ModalComponent;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _modalService: ModalService,
  ) {
  }

  @Input()
  set elModalOpenOnClick(els) {

    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    this.elements.forEach(el =>
      // при клике будет появляться модальное окно
      el.addEventListener('click', this.clickHandler));
  }

  clickHandler = (() => {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef);
  }).bind(this);

  ngOnInit(): void {
    // закрытие окна будет происходить каждый раз при вызове метода close() сервиса
    this._modalService
      .close$
      .subscribe(() => this._viewContainer.clear());
  }

  ngOnDestroy(): void {
    this.elements.forEach(el => el.addEventListener('click', this.clickHandler));
  }

}
