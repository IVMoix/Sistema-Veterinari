import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/servicios/pacientes.service';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {

  nuevosHistoriales: any[] = [] ;
  filtrarNombre: any = ''; 
  p: number = 1;


  constructor(public pacientesService: PacientesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales(){
    this.pacientesService.obtenerHistoriales().subscribe((resp: any) => {
      this.nuevosHistoriales = resp;
      console.log(this.nuevosHistoriales)
    })
  }

  verExpediente(idpaciente: any){
    this.router.navigate(['/dashboard/expediente', idpaciente])
  }
}
