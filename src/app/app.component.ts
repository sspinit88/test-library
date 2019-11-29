import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this._fb.group({
        from: [''],
        to: ['']
      },
      // { validator: this.checkIt('from', 'to') }
      { validators: comparisonOfTwoNumbers(this.form, 'from', 'to') }
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return alert('invalid');
    }
    alert('valid!');
  }

  checkIt(from: string, to: string): ValidationErrors {
    return (group: FormGroup) => {
      const a = group.get(from);
      const b = group.get(to);

      if (Number(a.value) > Number(b.value)) {
        return b.setErrors({ notEquivalent: true });
      } else {
        return b.setErrors(null);
      }
    };
  }
}

export function comparisonOfTwoNumbers(group: FormGroup | FormData, from: string, to: string): ValidatorFn {
  return (control: FormControl) => {

    const a = +control.value[from];
    const b = +control.value[to];

    return (a > b) ? { valueDifferentFrom: to } : null;
  };

}
