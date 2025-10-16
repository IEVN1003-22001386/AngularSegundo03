export class Multiplicacion {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  multiplicaNum(): void {
    this.resultado = 0;
    // se repite las veces que indique numero 2
    for (let i = 0; i < this.numero2; i++) {
      this.resultado += this.numero1; //se suma en cada interacción 
    }
  }
}
