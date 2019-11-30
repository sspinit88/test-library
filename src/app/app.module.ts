import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElInputCurrencyModule } from './el-input-currency/el-input-currency.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/au-fa-input/input-ref.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuTabComponent } from './lib/au-tab-panel/au-tab/au-tab.component';
import { AuTabPanelComponent } from './lib/au-tab-panel/au-tab-panel.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent,
    InputRefDirective,
    AuTabComponent,
    AuTabPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElInputCurrencyModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
