import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[] = [];
  textoBuscar: string = '';
  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getDataAlbums().subscribe(albunes => {
      this.albunes = albunes;
    });
  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
