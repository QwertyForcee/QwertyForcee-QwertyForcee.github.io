import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private mockService: MockServerService, private router:Router) {
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
    const formValue = this.signUpForm.value;
    if (this.signUpForm.valid){
      if (this.mockService.signIn(this.signUpForm.value)){
        this.router.navigate(['projects'])
      }

    }

  }
}
