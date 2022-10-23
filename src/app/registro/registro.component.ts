import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ){
    this.signupForm = this.fb.group({
      userName: [''],
      password: [''],
      fechaNacimiento: [''],
      sexo: [''],
      nombres: [''],
      apellidos: [''],
      email: [''],
      fotoPerfil: [''],
    });
  }

  ngOnInit(): void {
  }
  navegar1(){
    this.router.navigate(['/principal']);
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
    });
  }
}
