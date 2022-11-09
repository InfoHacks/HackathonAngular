import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  login() {
    const {username, password} = this.loginForm.value

    const isValid = this.loginForm.valid;
    
    if (isValid) {
      this.router.navigateByUrl('voting')
    } else {

    }

  }


}
