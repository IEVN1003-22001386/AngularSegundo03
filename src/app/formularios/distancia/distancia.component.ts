import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  /*formulario!:FormGroup;
  resultado!:number;
  constructor(){}
  ngOnInit():void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),

    })
  }
  multNumeros():void{
    const numero1=this.formulario.get('numero1')?.value;
    const numero2=this.formulario.get('numero2')?.value;
    this.resultado=numero1*numero2;
  }*/
    //formulario!: FormGroup;
    distancia: Distancia = new Distancia();
    mostrarResultado = false;

  formulario: FormGroup = new FormGroup({
    x1: new FormControl(null), 
    y1: new FormControl(null),
    x2: new FormControl(null),
    y2: new FormControl(null), 
  });

  calcularDistancia(): void {
    const datosFormulario = this.formulario.value;

     if (datosFormulario.x1 === null || datosFormulario.y1 === null || datosFormulario.x2 === null || datosFormulario.y2 === null) {
        alert('Por favor, ingresa los valores de las 4 coordenadas.');
        this.mostrarResultado = false;
        return;
    }

    this.distancia.x1 = parseInt(datosFormulario.x1);
    this.distancia.y1 = parseInt(datosFormulario.y1);
    this.distancia.x2 = parseInt(datosFormulario.x2);
    this.distancia.y2 = parseInt(datosFormulario.y2);

    this.distancia.calcular();
    this.mostrarResultado = true;
 }
}