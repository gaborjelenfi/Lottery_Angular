import { Component, OnInit } from '@angular/core';
import { GeneratingNumberService } from './generating-number.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ConnectionService } from '../connection.service';
import { Fav } from '../fav';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-generating',
  templateUrl: './generating.component.html',
  styleUrls: ['./generating.component.css'],
  animations: [
    trigger('selected', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-200px)'
        }),
        animate('300ms', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          transform: 'translateX(200px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class GeneratingComponent implements OnInit {
  faStar = faStar;

  constructor(public generatingNumberService: GeneratingNumberService,
              private connectionService: ConnectionService) { }

  ngOnInit() {
  }

  add(nums: number[]): void {
    // adding new favourite numbers to the favourites array
    this.connectionService.addFavourite({ nums } as Fav).subscribe(favNums => this.connectionService.favourites.push(favNums));
    // remove favoutie numbers from the coupon list array
    this.generatingNumberService.couponList = this.generatingNumberService.couponList.filter(g => g !== nums);
  }
}
