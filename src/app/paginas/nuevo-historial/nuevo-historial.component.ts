import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/servicios/pacientes.service';
import Swal from 'sweetalert2';
import { ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
declare var $: any;

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit {

  mostrar: boolean = false;
  pacientes: any[] = [];

  fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1 ) + '-' + new Date().getFullYear();
  
  nuevohistorial: any = {
    idpaciente: '',
    fechahistorial: this.fecha
  };

  imageChangedEvent: any = '';
  croppedImage: any = '../../../assets/assets/images/users/2.jpg';
  myFile: any = '';

  rotateStatus: boolean =  false;
  flipHorizontalStatus: boolean =  false;
  flipVerticalStatus: boolean =  false;
  discardChangesStatus: boolean =  false;
  transform: ImageTransform = {};

  constructor(private pacienteService: PacientesService, private router: Router ) {

  }

  ngOnInit(): void {
    this.obtenerPacientes();
    $(document).ready(function() {
      // Basic
      $('.dropify').dropify();
  
      // Translated
      $('.dropify-fr').dropify({
          messages: {
              default: 'Glissez-déposez un fichier ici ou cliquez',
              replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
              remove: 'Supprimer',
              error: 'Désolé, le fichier trop volumineux'
          }
      });
  
      // Used events
      var drEvent = $('#input-file-events').dropify();
  
      drEvent.on('dropify.beforeClear', function(event: any, element: any) {
          return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
      });
  
      drEvent.on('dropify.afterClear', function(event: any, element: any) {
          alert('File deleted');
      });
  
      drEvent.on('dropify.errors', function(event: any, element: any) {
          console.log('Has Errors');
      });
  
      var drDestroy = $('#input-file-to-destroy').dropify();
      drDestroy = drDestroy.data('dropify')
      $('#toggleDropify').on('click', function(e: any) {
          e.preventDefault();
          if (drDestroy.isDropified()) {
              drDestroy.destroy();
          } else {
              drDestroy.init();
          }
      })
  });

  }

  obtenerPacientes() {
    this.pacienteService.metodoGet('ObtenerPacientes.php').subscribe((data) => {
      this.pacientes = data.document;
      console.log(this.pacientes);
    })
  }
  
  altaHistorial() {
    Swal.fire({
      title: 'Desea registrar el historial?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {
        let formData = new FormData();

        formData.append('file', this.myFile);
        formData.append('pesohistorial', this.nuevohistorial.pesohistorial);
        formData.append('tallahistorial', this.nuevohistorial.tallahistorial);
        formData.append('fchistorial', this.nuevohistorial.fchistorial);
        formData.append('frhistorial', this.nuevohistorial.frhistorial);
        formData.append('ahhistorial', this.nuevohistorial.ahhistorial);
        formData.append('apnphistorial', this.nuevohistorial.apnphistorial);
        formData.append('hemotipohistorial', this.nuevohistorial.hemotipohistorial);
        formData.append('alergiashistorial', this.nuevohistorial.alergiashistorial);
        formData.append('apphistorial', this.nuevohistorial.apphistorial);
        formData.append('citahistorial', this.nuevohistorial.citahistorial);
        formData.append('idpaciente', this.nuevohistorial.idpaciente);
        formData.append('diagnostico', this.nuevohistorial.diagnostico);
        formData.append('fechahistorial', this.nuevohistorial.fechahistorial); 
        console.log( formData);
 
        this.pacienteService.metodoPost('NuevoHistorial.php', formData).subscribe((event: any) => {
          console.log(event);       

          Swal.fire('Registrado', '', 'success')
          if (event.status == 'success') {           
            this.router.navigate(['/dashboard/historial-paciente']);
          }
        });        
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })        
    
  }

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
    console.log(this.imageChangedEvent);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.myFile = this.dataURLtoFile(this.croppedImage, '../../../assets/assets/images/users/2.jpg')
  }
  
  dataURLtoFile(dataurl:any, filename:any) { 
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }    
    return new File([u8arr], filename, {type:mime});
  }

  rotate() {
    this.rotateStatus = true;
    this.flipHorizontalStatus = false;
    this.flipVerticalStatus = false;
    this.discardChangesStatus = false;
    const newValue = ((this.transform.rotate ?? 0) + 90 ) % 360;
    this.transform = {
      ...this.transform,
      rotate:newValue
    }
  }

  flipHorizontal() {
    this.rotateStatus = false;
    this.flipHorizontalStatus = true;
    this.flipVerticalStatus = false;
    this.discardChangesStatus = false;
    
    this.transform = {
      ...this.transform,
      flipH:!this.transform.flipH
    }
  }

  flipVertical() {
    this.rotateStatus = false;
    this.flipHorizontalStatus = false;
    this.flipVerticalStatus = true;
    this.discardChangesStatus = false;
    
    this.transform = {
      ...this.transform,
      flipV:!this.transform.flipV
    }
  }
  
}
