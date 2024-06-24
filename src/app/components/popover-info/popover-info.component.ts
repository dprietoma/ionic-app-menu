import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  dataList = Array(40);

  constructor(private PopoverCtrl: PopoverController) { }

  ngOnInit() { }


  onClick(valor: number) {
    console.log(valor);
    this.PopoverCtrl.dismiss({
      item: valor,
      role: 'cancelar'
    });
  }
}
