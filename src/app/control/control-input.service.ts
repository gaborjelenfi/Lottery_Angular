import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlInputService {
  fieldNum: number = null;
  fieldMin = 5;
  fieldMax = 99;
  yourNum: number = null;
  yourMin = 1;
  yourMax = 90;
  couponNum: number = null;
  couponMin = 1;
  couponMax = 100;
  possibleCouponMax: number = null;

  constructor() { }

  possibleCouponTotal(): number {
    let multiplyRangeMax = 1;
    let multiplyX = 1;
    for (let i = 0; i < this.yourNum; i++) {
      multiplyRangeMax *= this.fieldNum - i;
      multiplyX *= this.yourNum - i;
    }
    const total = multiplyRangeMax / multiplyX;
    if (total <= this.couponMax) {
      return Math.floor(total);
    } else {
      return this.couponMax;
    }
  }
}
