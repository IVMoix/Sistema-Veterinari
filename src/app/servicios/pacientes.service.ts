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
      {
        titulo: 'Clientes',
        icono: 'mdi mdi-gauge',
        submenu: [
          {titulo: 'Alta de cliente', url: '/dashboard/crearCliente'},
          {titulo: 'Lista de clientes', url: '/dashboard/listaClientes'},
          {titulo: 'Datos del cliente', url: '/dashboard/datosCliente'}
        ]
      },
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

}
