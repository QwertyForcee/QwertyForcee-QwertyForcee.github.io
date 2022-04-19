import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup(
      {
        "email": new FormControl("", Validators.email),
        "password": new FormControl("", Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.signUpForm.value);
    
  }
}
