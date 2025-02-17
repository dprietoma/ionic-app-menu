import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor(private dataService: DataService) {
    this.usuarios = new Observable<any>();
  }

  ngOnInit() {
    this.usuarios = this.dataService.getDataUsuarios();
  }

  unread(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }
  share(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }
  favorite(user: any) {
    console.log(user);
    this.ionList.closeSlidingItems();
  }

}
