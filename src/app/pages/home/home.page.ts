import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentList } from 'src/app/interfaces/components.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentsList!: Observable<ComponentList[]>;
  constructor(
    private menuCtrl: MenuController,
    private dataServices: DataService) { }


  mostrarMenu() {
    this.menuCtrl.open('first');
  }

  ngOnInit() {
    this.componentsList = this.dataServices.getMenuOpts();
  }

}
