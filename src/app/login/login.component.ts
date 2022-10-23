import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }
  ngOnInit(): void { }
  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }

  navegar(){
    this.router.navigate(['/principal']);
  }
  navegar1(){
    this.router.navigate(['/registro']);
  }
  

}
