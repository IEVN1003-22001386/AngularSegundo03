import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AxbComponent } from './formularios/axb/axb.component';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { TempComponent } from './tem/temp/temp.component';

//import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, AxbComponent, NavbarComponent, RouterLink, TempComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularSegundo03';
  //title = 'Calculadora de Distancia';
  //title = 'Zodiaco';
  title = 'Multiplicación AxB';

  ngOnInit(): void{
    initFlowbite();
  }
}
