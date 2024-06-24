import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHeroe } from 'src/app/interfaces/superheroe.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes!: Observable<SuperHeroe[]>;
  textoBuscar: string = 'todos';

  constructor(private datServices: DataService) {
    
  }

  ngOnInit() {
    this.superHeroes = this.datServices.getSuperHeroes();
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

}
