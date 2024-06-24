import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  numeroPantalla: number = 1;
  numeroProgress: number = 0.100;
  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: any) {
    console.log(event);
    this.numeroPantalla = event.detail.value / 10;
  }

  rangeChangeButton( ) {
    debugger;
    if (this.numeroPantalla === 5) {
      return
    }
    this.numeroPantalla = this.numeroPantalla + 1;
    this.numeroProgress = this.numeroProgress * 1.8;
      console.log(this.numeroPantalla,'this.numeroPantalla');
  }

}
