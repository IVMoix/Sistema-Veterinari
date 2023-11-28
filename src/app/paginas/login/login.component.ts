import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formSubmitted: boolean = false;

  public loginForm: any = this.fb.group({
    email: ['demo@demo', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  }) 

  constructor(private fb:FormBuilder, private loginService: LoginService, private router: Router){}

  iniciar_sesion(){
    this.formSubmitted = true;
    if ( this.loginForm.invalid){
      return; 
    }
    this.loginService.userLogin(this.loginForm.value)
    .subscribe(data =>{
      if( this.loginForm.value) {
        localStorage.setItem('email', this.loginForm.get('email').value);
        this.router.navigateByUrl('dashboard/nuevo-historial');
      } else {
        localStorage.removeItem('email');
      }
    }, err =>{
      Swal.fire({
        title: 'Error',
        text: 'Datos invalidos',
        timer: 2000
      })
      localStorage.removeItem('email');
    })
    }

  campovalido(campo: any){
    if( this.loginForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
