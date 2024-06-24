import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentList } from '../interfaces/components.interface';
import { SuperHeroe } from '../interfaces/superheroe.interface';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getDataUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDataAlbums(){
    return this.http.get<ComponentList[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(){
    return this.http.get<ComponentList[]>('/assets/data/menu-opts.json');
  }

  getSuperHeroes(){
    return this.http.get<SuperHeroe[]>('/assets/data/superheroes.json')
    .pipe(
      delay( 1500 )
    );
  }
}
