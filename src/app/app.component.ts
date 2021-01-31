import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(""),
            password: new FormControl(null),
        })
    }

    submit() {
        console.log("This form submited: ", this.form);
        const data = this.form.value;

        console.log(data);
        
    }
}
