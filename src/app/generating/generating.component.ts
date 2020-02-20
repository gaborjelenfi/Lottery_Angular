import { Component, OnInit } from '@angular/core';
import { GeneratingNumberService } from './generating-number.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ConnectionService } from '../connection.service';
import { Fav } from '../fav';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-generating',
  templateUrl: './generating.component.html',
  styleUrls: ['./generating.component.css'],
  animations: [
    trigger('selected', [
      state('normal', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(400, style({
          transform: 'translate3d(100%, 0, 0)',
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
    this.connectionService.addFavourite({ nums } as Fav).subscribe(favNums => this.connectionService.favourites.push(favNums));
    this.generatingNumberService.couponList = this.generatingNumberService.couponList.filter(g => g !== nums);
  }
}
