import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/servicios/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-doctor',
  templateUrl: './datos-doctor.component.html',
  styleUrls: ['./datos-doctor.component.css']
})
export class DatosDoctorComponent implements OnInit {
  
  doctor: any[] = [];
  docto: any = {};

  constructor(private pacienteService: PacientesService, ){

  }
  
  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores(){
    this.pacienteService.obtenerDoctores()
    .subscribe((resp: any) =>{
      this.doctor = resp;
      console.log(this.doctor)
    })
  }

  seleccionarDoctor(iddoctor: any){
    this.pacienteService.seleccionarDoctor(iddoctor)
    .subscribe((resp: any) =>{
      this.docto = resp[0];
      console.log(this.docto)
  })
}

  editarDoctor(){
    this.pacienteService.editarDoctor(this.docto)
    .subscribe((resp: any) =>{
      if (resp['resultado'] == 'OK'){
        Swal.fire({
          icon: 'success', 
          title: 'Actualizado correctamente',
          timer: 2000
        })
        this.obtenerDoctores();
      }
    })

  }
}
