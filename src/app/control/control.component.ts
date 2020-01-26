import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, DoCheck {
  @ViewChild('f', {static: false}) numbersForm: NgForm;
  fieldNum: number = null;
  fieldMin = 5;
  fieldMax = 99;
  yourNum: number = null;
  yourMin = 1;
  yourMax = 90;
  couponNum: number = null;
  couponMin = 1;
  couponMax = 1000;
  possibleCouponMax: number = null;
  isFieldNumValid = false;
  isYourNumValid = false;
  isCouponNumValid = false;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.fieldNum < this.fieldMin || this.fieldNum > this.fieldMax) {
      this.isFieldNumValid = false;
    } else {
      this.isFieldNumValid = true;
    }

    if (this.yourNum < this.yourMin || this.yourNum > this.yourMax) {
      this.isYourNumValid = false;
    } else {
      this.isYourNumValid = true;
    }

    if (this.couponNum < this.couponMin || this.couponNum > this.possibleCouponMax) {
      this.isCouponNumValid = false;
    } else {
      this.isCouponNumValid = true;
    }

    if (this.isFieldNumValid && this.isYourNumValid && this.yourNum < this.fieldNum) {
      this.possibleCouponMax = this.possibleCouponTotal();
      console.log(this.possibleCouponMax);
    }
  }

  possibleCouponTotal(): number {
    let multiplyRangeMax = 1;
    let multiplyX = 1;
    for (let i = 0; i < this.yourNum; i++) {
      multiplyRangeMax *= this.fieldNum - i;
      multiplyX *= this.yourNum - i;
    }
    if (multiplyRangeMax / multiplyX <= this.couponMax) {
      return Math.floor(multiplyRangeMax / multiplyX);
    } else {
      return this.couponMax;
    }
  }

  onSubmit() {

  }

}
