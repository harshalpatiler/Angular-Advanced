import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent implements OnInit {

  constructor() { }
  loginData(signInform: NgForm){
   console.log(signInform.value.email);
   console.log(signInform.value.terms)
  }
  ngOnInit(): void {
  }

}
