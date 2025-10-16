export class Persona {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = '';

  calcularEdad(): void {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.anio;
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    if (mesActual < this.mes || (mesActual === this.mes && diaActual < this.dia)) {
      edad--;
    }

    this.edad = edad;
  }

  obtenerSignoChino(): void {
    const residuo = this.anio % 12;

    if (residuo === 0) {
      this.signo = 'Mono';
    } else if (residuo === 1) {
      this.signo = 'Gallo';
    } else if (residuo === 2) {
      this.signo = 'Perro';
    } else if (residuo === 3) {
      this.signo = 'Cerdo';
    } else if (residuo === 4) {
      this.signo = 'Rata';
    } else if (residuo === 5) {
      this.signo = 'Buey';
    } else if (residuo === 6) {
      this.signo = 'Tigre';
    } else if (residuo === 7) {
      this.signo = 'Conejo';
    } else if (residuo === 8) {
      this.signo = 'Dragón';
    } else if (residuo === 9) {
      this.signo = 'Serpiente';
    } else if (residuo === 10) {
      this.signo = 'Caballo';
    } else if (residuo === 11) {
      this.signo = 'Cabra';
    }

    this.imagenSigno = `imagenes/signos/${this.signo}.jpg`;
  }
}
