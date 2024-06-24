import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
 data: any[] = Array(20);
 @ViewChild( IonInfiniteScroll ) infinitiScroll!: IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(event: any){

    console.log(event);
    if (this.data.length > 50 ) {
      this.infinitiScroll.complete();
      this.infinitiScroll.disabled = true;
      return
    }
    setTimeout(() => {
      const newArray = Array(20);
      this.data.push(...newArray);
      this.infinitiScroll.complete();
    }, 1500);

  }

}
