import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { ComponentList } from './interfaces/components.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentsList!: Observable<ComponentList[]>;
  constructor(private dataServices: DataService) {
    this.componentsList = this.dataServices.getMenuOpts();
  }
}
