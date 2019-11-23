import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElInputCurrencyComponent } from './el-input-currency.component';
import { ElInputCurrencyWrapComponent } from './el-input-currency-wrap/el-input-currency-wrap.component';
import { ElInputCourencyDDirective } from './el-input-courency-d.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ElInputCurrencyComponent,
    ElInputCurrencyWrapComponent,
    ElInputCourencyDDirective,
  ],
  exports: [
    ElInputCurrencyComponent,
    ElInputCurrencyWrapComponent,
    ElInputCourencyDDirective,
  ],
})
export class ElInputCurrencyModule { }
