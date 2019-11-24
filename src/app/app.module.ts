import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/au-fa-input/input-ref.directive';
import { MaskModule } from './mask/mask.module';

@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
