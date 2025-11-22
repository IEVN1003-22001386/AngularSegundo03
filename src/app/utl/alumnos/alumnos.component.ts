import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-alumnos',
  imports: [RouterLink, FormsModule, AlumnosFilterPipe, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export default class AlumnosComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''
  alumnoTitle!:string
  dataSource:any=[];

  constructor(public alumnosUtl:ProyectoapiService){}

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:123,
      nombre:'pedro',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo:'pedro@gmail.com',

    },
    {
      matricula:456,
      nombre:'luis',
      apaterno:'hernandez',
      amaterno:'ramirez',
      correo:'luis@gmail.com',
      
    }
  ]

  ngOnInit(): void{
    this.alumnosUtl.getAlumnos().subscribe(
      {
        next: response=>{
          this.dataSource=response;
        },
        error: error=>console.log(error)
      }
        );
  }
}
