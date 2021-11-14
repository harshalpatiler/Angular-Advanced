import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.formLogin = formbuilder.group({
      // email: new FormControl(),
      // pass: new FormControl(),
      // rad1: new FormControl(),
      // check: new FormControl(),
      // rad3: new FormControl() 
      email: ['', Validators.required],
      pass: ['', Validators.required],
      rad1: new FormControl(),
      rad2: new FormControl(),
      check: new FormControl(),
      rad3: new FormControl()
    })
  }
  ngOnInit(): void { 
    // setValue used when we want to set values for all input controls
    // we can not omit the single input field 
    //using patch we can set values for input fields.
    //  this.formLogin.patchValue({
    //    email: 'harshal@angular.com'
    //  })
    this.formLogin.get('email').statusChanges.subscribe(
      data => { console.log(data) }
    )
    this.formLogin.statusChanges.subscribe(data => { console.log(data) })

    this.formLogin.get('email').valueChanges.subscribe(
      data => {
        console.log(data)
      }
    )
  }
  onsubmit() {
    console.log(this.formLogin);
  }
  resetForm() {
    this.formLogin.reset();
  }
}
