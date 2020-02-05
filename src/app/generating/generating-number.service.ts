import { Injectable } from '@angular/core';
import { ControlInputService } from '../control/control-input.service';

@Injectable({
  providedIn: 'root'
})
export class GeneratingNumberService {
  couponList = [];
  singleCouponArr = [];
  randomNumber: number;
  isCouponListReady = false;

  constructor(private controlService: ControlInputService) {}

  generateNumbers() {
    this.isCouponListReady = false;
    this.couponList = [];
    for (let i = 0; i < this.controlService.couponNum; ) {
      this.singleCouponArr = [];
      this.randomNumber = this.randomNumberForYourNumber();
      do {
        this.singleCouponArr.push(this.randomNumber);
        this.randomNumber = this.randomNumberForYourNumber();
      } while (this.noSameNumber());
      this.singleCouponArr.sort((a, b) => a - b);
      if (this.noSameCoupon() || this.couponList.length === 0) {
        this.couponList.push(this.singleCouponArr);
        i++;
      }
    }
    this.couponList.sort((a, b) => a[0] - b[0]);
    this.isCouponListReady = true;
  }

  randomNumberForYourNumber() {
    return Math.floor(Math.random() * this.controlService.fieldNum) + 1;
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
    let equalCount = 0;
    for (const el of this.couponList) {
      for (let i = 0; i < this.singleCouponArr.length; i++) {
        if (el[i] === this.singleCouponArr[i]) {
          equalCount++;
        }
      }
      if (equalCount === this.singleCouponArr.length) {
        return false;
      }
      equalCount = 0;
    }
    return true;
  }
}
