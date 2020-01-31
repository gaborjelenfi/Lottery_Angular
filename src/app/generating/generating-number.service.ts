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
    this.couponList = [];
    for (let i = 0; i < this.controlService.couponNum; ) {
      this.singleCouponArr = [];
      console.log('new coupon');
      this.randomNumber = this.randomNumberForYourNumber();
      do {
        this.singleCouponArr.push(this.randomNumber);
        console.log('x. element writes to the array');
        this.randomNumber = this.randomNumberForYourNumber();
      } while (this.noSameNumber());
      this.singleCouponArr.sort((a, b) => a - b);
      if (this.noSameCoupon() || this.couponList.length === 0) {
        this.couponList.push(this.singleCouponArr);
        console.log('singleCouponArr: ' + this.singleCouponArr);
        console.log('N. coupon created');
        i++;
      }
    }
    console.log(this.couponList);
  }

  randomNumberForYourNumber() {
    return Math.floor(Math.random() * this.controlService.fieldNum) + 1;
  }

  noSameNumber(): boolean {
    if (this.singleCouponArr.length >= this.controlService.yourNum) {
      console.log('reached the quantity that was choose for x');
      return false;
    } else {
      for (let i = 0; i < this.singleCouponArr.length; ) {
        if (this.singleCouponArr[i] === this.randomNumber) {
          console.log('same number found');
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
        console.log(el[i]);
        console.log(this.singleCouponArr[i]);
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
