import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'test-library';

  loginActive = true;

  // обеспечивает переключение нужного таба при открытии окна
  setLoginActive(loginActive) {
    this.loginActive = loginActive;
  }
}
