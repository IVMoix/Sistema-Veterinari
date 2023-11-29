import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { DatosDoctorComponent } from './datos-doctor/datos-doctor.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';
import { NuevoHistorialComponent } from './nuevo-historial/nuevo-historial.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
    {path:'dashboard', component: PaginasComponent,
                canActivate: [authGuard],
                children:[
                    {path: 'moix/crearPaciente', component: CrearPacienteComponent},
                    {path: 'moix/datosDoctor', component: DatosDoctorComponent},
                    {path: 'moix/datosPaciente', component: DatosPacienteComponent},
                    {path: 'moix/expediente/:id', component: ExpedienteComponent},
                    {path: 'moix/historialPaciente', component: HistorialPacienteComponent},
                    {path: 'moix/nuevoHistorial', component: NuevoHistorialComponent},
                    // {path: 'crearPaciente', component: CrearPacienteComponent},
                    // {path: 'datosDoctor', component: DatosDoctorComponent},
                    // {path: 'datosPaciente', component: DatosPacienteComponent},
                    // {path: 'expediente/:id', component: ExpedienteComponent},
                    // {path: 'historialPaciente', component: HistorialPacienteComponent},
                    // {path: 'nuevoHistorial', component: NuevoHistorialComponent},
                ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
