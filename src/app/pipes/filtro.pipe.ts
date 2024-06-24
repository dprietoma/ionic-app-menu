import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[] | null, texto:string = '', columna: string = 'title'): any[] {
    if ( !arreglo) {
      return [];
    }

    if ( texto === '') {
      return arreglo;
    }
    
    if ( texto === 'todos') {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    return arreglo.filter(
      item => item[columna].toLowerCase().includes( texto )
    );
  }

}
