import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({})
    }

    submit() {
        console.log("This form submited: ", this.form);
        
    }
}
