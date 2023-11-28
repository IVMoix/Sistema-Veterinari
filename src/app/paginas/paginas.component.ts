import { Component } from '@angular/core';
import { PacientesService } from '../servicios/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent {

  constructor( public pacientesService: PacientesService, public router:Router){
    console.log(pacientesService.menu);
  }

  logout() {
    this.pacientesService.logout();
    this.router.navigateByUrl('/login');
  }
}
