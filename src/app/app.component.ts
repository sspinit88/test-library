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

//// todo вариант 1
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

//// todo вариант 2
export function comparisonOfTwoNumbers(group: FormGroup | FormData, from: string, to: string): ValidatorFn {
  return (control: FormControl) => {

    const a = +control.value[from];
    const b = +control.value[to];

    if (!a && !!b) {
      return null;
    }
    if ((!!a && !!b) && (a > b)) {
      return { valueDifferentFrom: to };
    } else {
      return null;
    }
  };
}
