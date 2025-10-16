import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Persona } from './persona';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
}) 
export class ZodiacoComponent {
  formulario!: FormGroup; 
  persona: Persona = new Persona();
  mostrarResultado = false;

  ngOnInit(): void {
    // Inicializamos todos los campos a null
      this.formulario = new FormGroup({
      nombre: new FormControl(''),       
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),           
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')          
    });
  }

  imprimir(): void {
    const datosFormulario = this.formulario.value; //<- ???
    if (
      !datosFormulario.nombre ||
      !datosFormulario.apaterno ||
      !datosFormulario.amaterno ||
      !datosFormulario.dia ||
      !datosFormulario.mes ||
      !datosFormulario.anio ||
      !datosFormulario.sexo
    ) {
      alert('Por favor llena los campos');
      this.mostrarResultado = false;
        return;
    }

    this.persona.nombre = datosFormulario.nombre;
    this.persona.apaterno = datosFormulario.apaterno;
    this.persona.amaterno = datosFormulario.amaterno;
    // Asignación segura de números (si es null, usa 0)
    this.persona.dia = parseInt(datosFormulario.dia) || 0; 
    this.persona.mes = parseInt(datosFormulario.mes) || 0;
    this.persona.anio = parseInt(datosFormulario.anio) || 0;
    this.persona.sexo = datosFormulario.sexo || '';

    this.persona.calcularEdad();
    this.persona.obtenerSignoChino();

    this.mostrarResultado = true;
  }
}
