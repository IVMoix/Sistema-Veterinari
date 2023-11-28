import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { apiServer } from '../apiServer';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: any = apiServer.URL;
  @Output() nombre: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  userLogin(data: any){
    return this.http.post(`${this.url}login.php`, data)
    .pipe( map( ( Users: any) => {
      console.log(Users);
      this.setToken(Users[0].name)
      this.nombre.emit(true);
      return Users;
    }));
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    const userToken = this.getToken();

    if (userToken != null) {
      return true;
    }
    return false;
  }
}
