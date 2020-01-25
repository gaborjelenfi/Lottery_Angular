import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, DoCheck {
  @ViewChild('f', {static: false}) numbersForm: NgForm;
  fieldNum: number;
  fieldMin = 5;
  fieldMax = 99;
  yourNum: number;
  yourMin = 1;
  yourMax = 90;
  couponNum: number;
  couponMin = 1;
  couponMax = 1000;
  isfieldNumValid = false;
  isyourNumValid = false;
  iscouponNumValid = false;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.fieldNum < this.fieldMin || this.fieldNum > this.fieldMax) {
      this.isfieldNumValid = false;
    } else {
      this.isfieldNumValid = true;
    }

    if (this.yourNum < this.yourMin || this.yourNum > this.yourMax) {
      this.isyourNumValid = false;
    } else {
      this.isyourNumValid = true;
    }

    if (this.couponNum < this.couponMin || this.couponNum > this.couponMax) {
      this.iscouponNumValid = false;
    } else {
      this.iscouponNumValid = true;
    }
  }

  onSubmit() {

  }

}
