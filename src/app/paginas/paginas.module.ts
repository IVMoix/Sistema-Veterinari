import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PaginasComponent } from './paginas.component';
import { LoginComponent } from './login/login.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { CrearDoctorComponent } from './crear-doctor/crear-doctor.component';
import { DatosDoctorComponent } from './datos-doctor/datos-doctor.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';
import { NuevoHistorialComponent } from './nuevo-historial/nuevo-historial.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    PaginasComponent,
    LoginComponent,
    CrearPacienteComponent,
    CrearDoctorComponent,
    DatosDoctorComponent,
    DatosPacienteComponent,
    ExpedienteComponent,
    HistorialPacienteComponent,
    NuevoHistorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ImageCropperModule
  ]
})
export class PaginasModule { }
