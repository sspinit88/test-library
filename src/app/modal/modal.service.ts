import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {

  // сабжект будет вызываться каждый раз при вызове метода для закрытия
  // передаем в close$, с помощью которого будем оповещать директиву о том, что нужно закрыть модальное окно
  private _subject: Subject<any> = new Subject<any>();

  close$: Observable<any> = this._subject.asObservable();

  constructor() {
  }

  close() {
    // при вызове этого метода будем излучать новое значение для сабжекта
    this._subject.next();
  }
}
