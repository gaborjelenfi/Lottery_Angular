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

  generateNumbers(): void {
    this.isCouponListReady = false;
    this.couponList = []; // empty the exists couponList
    for (let i = 0; i < this.controlService.couponNum; ) {
      this.singleCouponArr = []; // empty the new coupon array
      this.randomNumber = this.randomNumberForYourNumber(); // generate random number in a specified interval
      do {
        this.singleCouponArr.push(this.randomNumber); // push the first number to singleCouponArr
        this.randomNumber = this.randomNumberForYourNumber(); // generate a new number in a specified interval
      } while (this.sameNumberAllowed());
      // if same number allowed then there is no sorting in ascending order (there is a kind of lottery where the order matter)
      if (!this.controlService.isSortingNotAllowed) {
        // if same number not allowed just sort numbers in ascending order
        this.singleCouponArr.sort((a, b) => a - b);
      }
      // push new coupon to the couponList if no same coupon found and single coupon array is not empty
      if (this.noSameCoupon() || this.couponList.length === 0) {
        this.couponList.push(this.singleCouponArr);
        i++;
      }
    }
    // sort all coupons ascending order according to the first number in a coupon
    this.couponList.sort((a, b) => a[0] - b[0]);
    this.isCouponListReady = true;
  }

  randomNumberForYourNumber(): number {
    if (this.controlService.isZeroCanBe) {
      return Math.floor(Math.random() * (this.controlService.fieldNum + 1)); // random number between 0 and fieldNum
    } else {
      return Math.floor(Math.random() * this.controlService.fieldNum) + 1; // random number between 1 and fieldNum
    }
  }

  sameNumberAllowed(): boolean {
    if (this.singleCouponArr.length >= this.controlService.yourNum) {
      return false;
    } else if (this.controlService.isSameNumbers) {
      return true; // if the user allow to generate the same number more than just once in the same coupon
    } else {
      return this.noSameNumber(); // if same numbers not allowed in the coupon
    }
  }

  noSameNumber(): boolean {
    for (let i = 0; i < this.singleCouponArr.length; ) {
      // if random number already in the singleCoupon array, generate a new random number
      if (this.singleCouponArr[i] === this.randomNumber) {
        this.randomNumber = this.randomNumberForYourNumber();
        i = 0;
      } else {
        i++; // if no same number found, get another number
      }
    }
    return true;
  }

  // only uniqe coupons allowed because does not make sense for same coupons
  noSameCoupon(): boolean {
    let equalCount = 0;
    for (const el of this.couponList) {
      for (let i = 0; i < this.singleCouponArr.length; i++) {
        if (el[i] === this.singleCouponArr[i]) {
          equalCount++; // count if the already generated coupons numbers are equal with the new coupon number
        }
      }
      if (equalCount === this.singleCouponArr.length) {
        return false; // if every number in the new coupon found in an exists coupon the new coupon failed and starts over
      }
      equalCount = 0;
    }
    return true;
  }
}
