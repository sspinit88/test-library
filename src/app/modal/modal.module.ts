import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ElModalOpenOnClickDirective } from './el-modal-open-on-click.directive';
import { ModalService } from './modal.service';


@NgModule({
  declarations: [
    ModalComponent,
    ElModalOpenOnClickDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
    ElModalOpenOnClickDirective
  ],
})
export class ModalModule {
  // ниже описанное важно использовать, если есть ленива загрузка можулей, и используется несколько экземпляров
  // компонента модального окна
  // для того, что бы сервис определялся глобально, на уровне корневого модуля
  // ниже написан статический инициализатор, который мы должны использовать в корневом модуле приложени
  // имеет несколько свойств
  static forRoot(): ModuleWithProviders {
    return {
      // передаем модуль
      ngModule: ModalModule,
      // указываем поставщика c сервисом
      providers: [ModalService],
    };
  }
}
