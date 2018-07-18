import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  pointNumbers: any;

  public pageHeaderCarousel: NgxCarousel;

  constructor() { }

  ngOnInit() {

    this.pageHeaderCarousel = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 1,
      speed: 1000,
      interval: 5000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: -60px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            opacity: 0.5;
            background: rgba(222, 222, 224, 0.85);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: #dd4f05;
              width: 15px;
              height: 15px;
              padding-top: 10px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
    }
  }

  public onmoveFn(data: NgxCarouselStore) {
    console.log(data);
  }

}
