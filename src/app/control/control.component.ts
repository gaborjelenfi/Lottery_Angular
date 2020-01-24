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
  yourNum: number;
  couponNum: number;
  isfieldNumValid = false;
  isyourNumValid = false;
  iscouponNumValid = false;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.fieldNum <= 4 || this.fieldNum >= 100) {
      this.isfieldNumValid = false;
    } else {
      this.isfieldNumValid = true;
    }

    if (this.yourNum <= 0 || this.yourNum >= 91) {
      this.isyourNumValid = false;
    } else {
      this.isyourNumValid = true;
    }

    if (this.couponNum <= 0 || this.couponNum >= 1001) {
      this.iscouponNumValid = false;
    } else {
      this.iscouponNumValid = true;
    }
  }

  onSubmit() {

  }

}
