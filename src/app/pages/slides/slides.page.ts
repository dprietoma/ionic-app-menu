import { Component, OnInit } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  swiperModules = [IonicSlides];

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    new Swiper('.swiper', {
      slidesPerView: 3,
      grid: {
        rows: 3,
      },
      mousewheel: {
        forceToAxis: true,
      },
    });
  }

  onClick() {
    this.navCtrl.navigateBack('/')
  }

}
