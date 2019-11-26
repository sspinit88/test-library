import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/au-fa-input/input-ref.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuTabComponent } from './lib/au-tab-panel/au-tab/au-tab.component';
import { AuTabPanelComponent } from './lib/au-tab-panel/au-tab-panel.component';
import { ModalModule } from './modal/modal.module';

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
    ModalModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
