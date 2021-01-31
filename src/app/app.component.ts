import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl("", [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ]),
        })
    }

    submit() {
        if (!this.form.invalid) {
            console.log("This form submited: ", this.form);
            const data = this.form.value;

            console.log(data);
        }
    }
}
