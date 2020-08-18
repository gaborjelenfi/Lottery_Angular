import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlInputService {
  isSameNumbers = false;
  isSortingNotAllowed = false;
  isZeroCanBe = false;
  fieldNum: number = null;
  fieldMin = 5;
  fieldMax = 90;
  yourNum: number = null;
  yourMin = 1;
  yourMax: number = null;
  defaultYourMax = 10;
  couponNum: number = null;
  couponMin = 1;
  couponMax = 250;
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
    if (total <= this.couponMax && !this.isSameNumbers) {
      return Math.floor(total);
    } else {
      return this.couponMax;
    }
  }
}
