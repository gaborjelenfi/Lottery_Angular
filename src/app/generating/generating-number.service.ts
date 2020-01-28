import { Injectable } from '@angular/core';
import { ControlInputService } from '../control/control-input.service';

@Injectable({
  providedIn: 'root'
})
export class GeneratingNumberService {
  couponList = [];
  singleCouponArr = [];
  randomNumber: number;

  constructor(private controlService: ControlInputService) {}

  generateNumbers() {
    for (let i = 0; i < this.controlService.couponNum; ) {
      this.randomNumber = this.randomNumberForYourNumber();
      do {
        this.singleCouponArr.push(this.randomNumber);
        this.randomNumber = this.randomNumberForYourNumber();
      } while (this.noSameNumber());
      this.singleCouponArr.sort();
      if (this.noSameCoupon()) {
        this.couponList.push(this.singleCouponArr);
        i++;
      }
    }
    console.log(this.couponList);
  }

  randomNumberForYourNumber() {
    return (
      Math.floor(Math.random() * this.controlService.fieldMax) +
      this.controlService.fieldMin
    );
  }

  noSameNumber(): boolean {
    if (this.singleCouponArr.length >= this.controlService.yourNum) {
      return false;
    } else {
      for (let i = 0; i < this.singleCouponArr.length; ) {
        if (this.singleCouponArr[i] === this.randomNumber) {
          this.randomNumber = this.randomNumberForYourNumber();
          i = 0;
        } else {
          i++;
        }
      }
      return true;
    }
  }

  noSameCoupon() {
    for (const item of this.couponList) {
      if (item.length !== this.singleCouponArr.length) {
        return false;
      } else {
        for (let i = 0; i < item.length; i++) {
          if (item[i] !== this.singleCouponArr[i]) {
            return;
          }
        }
        return false;
      }
    }
    return true;
  }
}
