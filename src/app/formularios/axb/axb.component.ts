import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Multiplicacion } from './multiplicacion';

@Component({
  selector: 'app-axb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './axb.component.html',
  styleUrls: ['./axb.component.css']
})
export class AxbComponent {
  //almacena los datos de num1,num2, resul
  operacion: Multiplicacion = new Multiplicacion();

  formulario: FormGroup = new FormGroup({
    numeroA: new FormControl(null),
    numeroB: new FormControl(null),
  });

  calcular(): void {
    const datosFormulario = this.formulario.value; 

    if (datosFormulario.numeroA === null || datosFormulario.numeroB === null) {
        alert('Por favor, ingresa los valores de A y B.');
        this.operacion.resultado = 0; // Limpiamos el resultado anterior
        return;
    }

    // Usamos parseInt() para garantizar que son números enteros positivos
    this.operacion.numero1 = parseInt(datosFormulario.numeroA);
    this.operacion.numero2 = parseInt(datosFormulario.numeroB);

    this.operacion.multiplicaNum();
  }
}