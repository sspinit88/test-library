import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ElModalOpenOnClickDirective } from './el-modal-open-on-click.directive';


@NgModule({
  declarations: [
    ModalComponent,
    ElModalOpenOnClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ElModalOpenOnClickDirective
  ]
})
export class ModalModule {
}
