import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHeroe } from 'src/app/interfaces/superheroe.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {
  superHeroes!: Observable<SuperHeroe[]>;

  constructor(private datServices: DataService) {
    
  }

  ngOnInit() {
    this.superHeroes = this.datServices.getSuperHeroes();
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
  }

}
