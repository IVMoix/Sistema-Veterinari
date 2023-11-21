import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/servicios/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css'],
})
export class DatosPacienteComponent implements OnInit {
  pacientes: any = [];
  paciente: any = {};

  constructor(private pacientesService: PacientesService, public router: Router) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacientesService
      .metodoGet('ObtenerPacientes.php')
      .subscribe((data) => {
        console.log(data);
        this.pacientes = data.document;
        console.log(this.pacientes);
      });
  }

  seleccionarPaciente(idpaciente: any) {
    // console.log(idpaciente);
    this.pacientesService
      .seleccionarPaciente(idpaciente)
      .subscribe((resp: any) => {
        this.paciente = resp[0];
        console.log(this.paciente);
      });
  }

  editarPaciente(){

    Swal.fire({
      title: "¿Desea editar al paciente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Editar",
      denyButtonText: `No`
    }).then((result) => {
      
      if (result.isConfirmed) {
        
        let formData = new FormData();
        formData.append('nompaciente',this.paciente.nompaciente);
        formData.append('edadpaciente',this.paciente.edadpaciente);
        formData.append('telpaciente',this.paciente.telpaciente);
        formData.append('dirpaciente',this.paciente.dirpaciente);
        formData.append('idpaciente',this.paciente.idpaciente);
    
        this.pacientesService.metodoPost('EditarPaciente.php', formData).subscribe((event: any) =>{
          console.log(event);
          Swal.fire("¡Modificacion exitosa!", "", "success")
          if(event.status == 'success') {
            this.obtenerPacientes();
          }
        } 
      )

      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  }

  eliminarPaciente(idpaciente: any){
    Swal.fire({
      title: "¿Desea eliminar al paciente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No`
    }).then((result) => {
      
      if (result.isConfirmed) {

        Swal.fire("Eliminado", "", "success");
        this.pacientesService.eliminarPaciente(idpaciente).subscribe((resp:any) => {
          if (resp['resultado'] == 'OK') {
            console.log('Paciente eliminado');
          this.obtenerPacientes();
          }
        })

      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  }
}
