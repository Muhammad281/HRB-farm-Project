import { Component, OnInit } from '@angular/core';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SwiperCore, { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-template',
  // selector: 'app-swiper-example',
  templateUrl: './template.component.html'
  ,
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }
  ;
  onSwiper(swiper:any)  {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  constructor() { }

  ngOnInit(): void {
  }

}

