import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url = apiServer.URL;
  
  public menu: any = [
    {
      titulo: 'Doctores',
      icono: 'mdi mdi-stethoscope',
      submenu: [
        {
          titulo: 'Datos del doctor', url: '/dashboard/datosDoctor'
          
        }
      ]
    },
      // {
      //   titulo: 'Clientes',
      //   icono: 'mdi mdi-gauge',
      //   submenu: [
      //     {titulo: 'Alta de cliente', url: '/dashboard/crearCliente'},
      //     {titulo: 'Lista de clientes', url: '/dashboard/listaClientes'},
      //     {titulo: 'Datos del cliente', url: '/dashboard/datosCliente'}
      //   ]
      // },
    {
      titulo: 'Pacientes',
      icono: 'mdi mdi-paw',
      submenu: [

          {titulo: 'Registrar Paciente', url: '/dashboard/crearPaciente'},
          {titulo: 'Datos del paciente', url: '/dashboard/datosPaciente'}

      ]
    },
    {
      titulo: 'Historial Clinico',
      icono: 'mdi mdi-account',
      submenu: [
        {titulo: 'Nuevo Historial', url: '/dashboard/nuevoHistorial'},
        {titulo: 'Historial paciente', url: '/dashboard/historialPaciente'}
      ]
    },
    
  ];

  constructor(private http: HttpClient ) {}
  
  metodoPost(url: any, body: any ):Observable<any> {
    return this.http.post(`${this.url}${url}`, body);
  }
  metodoGet(url: any):Observable<any> {
    return this.http.get(`${this.url}${url}`);
  }

  seleccionarPaciente(idpaciente: number){
    return this.http.get(`${this.url}SeleccionarPaciente.php?idpaciente=${idpaciente}`);
  }

  seleccionarDoctor(iddoctor: number){
    return this.http.get(`${this.url}SeleccionarDoctor.php?iddoctor=${iddoctor}`);
  }

  obtenerDoctores(){
    return this.http.get(`${this.url}ObtenerDoctores.php`);
  }

  eliminarPaciente(idpaciente: any){
    return this.http.get(`${this.url}EliminarPaciente.php?idpaciente=${idpaciente}`);
  }

  obtenerHistoriales(){
    return this.http.get(`${this.url}ObtenerHistoriales.php`);
  }

  obtenerExpediente(idpaciente: number){
    return this.http.get(`${this.url}ObtenerExpedientes.php?idpaciente=${idpaciente}`);
  }

  seleccionarExpediente(idhistorial: number){
    return this.http.get(`${this.url}SeleccionarExpediente.php?idhistorial=${idhistorial}`);
  }
  seleccionarReceta(idhistorial: any){
    return this.http.get(`${this.url}SeleccionarReceta.php?idhistorial=${idhistorial}`);
  }

  editarDoctor(iddoctor: any) {
    return this.http.post(`${this.url}EditarDoctor.php?`, JSON.stringify(iddoctor));
  }
  
  logout(){
    localStorage.removeItem('token');
  }
}
