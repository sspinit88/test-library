import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'test-library';

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      lotStartPrice: [''],
      lotFinishPrice: [''],
    });
  }

  onSubmit(): void {
    // console.log(this.form.value);
    // console.log(this.form);
  }
}
