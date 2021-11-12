import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
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
      email:['', Validators.required],
      pass:['', Validators.required] ,
      rad1: new FormControl(),
      rad2: new FormControl(),
      check: new FormControl(),
      rad3: new FormControl() 
    })
  }
  ngOnInit(): void {

  }
  onsubmit(){
    console.log(this.formLogin);
  }
}
