import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'el-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;
  @Input() hideOnEsc: boolean = true;
  @Input() hideOnClickOutside: boolean = true;
  // через контекст получаем параметры переданного шаблона (ищи в './modal.component.html')
  @Input() context: any;

  constructor(
    private _modalService: ModalService,
    private _eventManager: EventManager, // сервис - глобальный менеджер событий
  ) {
  }

  ngOnInit(): void {
    this._eventManager
      .addGlobalEventListener('window', 'keyup.esc', () => {
        if (!!this.hideOnEsc) {
          this.closeModal();
        }
      });
  }

  onClickOutsideModal(): void {
    if (!!this.hideOnClickOutside) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this._modalService.close();
  }

  cancelClick(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
  }
}
