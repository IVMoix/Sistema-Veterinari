import { Component } from '@angular/core';
import { PacientesService } from 'src/app/servicios/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  pacientes: any = {};

  constructor (public pacientesService: PacientesService) {}

  
  altaPaciente(){

    let formData = new FormData();
    formData.append('nompaciente',this.pacientes.nompaciente);
    formData.append('edadpaciente',this.pacientes.edadpaciente);
    formData.append('telpaciente',this.pacientes.telpaciente);
    formData.append('dirpaciente',this.pacientes.dirpaciente);

    this.pacientesService.metodoPost('AltaPaciente.php', formData).subscribe((event: any) =>{
      console.log(event);
      if(event.status == 'success') {
        
      }
    } 
    )
  }
}
