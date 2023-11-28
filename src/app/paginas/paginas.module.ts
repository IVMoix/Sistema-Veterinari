import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FiltrarTablaPipe } from '../pipes/filtrar-tabla.pipe'; 
import {NgxPaginationModule} from 'ngx-pagination';



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
    NuevoHistorialComponent,
    FiltrarTablaPipe
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ImageCropperModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ]
})
export class PaginasModule { }
