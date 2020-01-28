import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControlInputService } from './control-input.service';
import { GeneratingNumberService } from '../generating/generating-number.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, DoCheck {
  @ViewChild('f', { static: false }) numbersForm: NgForm;
  isFieldNumValid = false;
  isYourNumValid = false;
  isCouponNumValid = false;

  constructor(public controlService: ControlInputService,
              private generatingNumberService: GeneratingNumberService) {}

  ngOnInit() {}

  ngDoCheck() {
    if (
      this.controlService.fieldNum < this.controlService.fieldMin ||
      this.controlService.fieldNum > this.controlService.fieldMax
    ) {
      this.isFieldNumValid = false;
    } else {
      this.isFieldNumValid = true;
    }

    if (
      this.controlService.yourNum < this.controlService.yourMin ||
      this.controlService.yourNum > this.controlService.yourMax
    ) {
      this.isYourNumValid = false;
    } else {
      this.isYourNumValid = true;
    }

    if (
      this.controlService.couponNum < this.controlService.couponMin ||
      this.controlService.couponNum > this.controlService.possibleCouponMax
    ) {
      this.isCouponNumValid = false;
    } else {
      this.isCouponNumValid = true;
    }

    if (
      this.isFieldNumValid &&
      this.isYourNumValid &&
      this.controlService.yourNum < this.controlService.fieldNum
    ) {
      this.controlService.possibleCouponMax = this.controlService.possibleCouponTotal();
    }
  }

  onSubmit() {
    this.generatingNumberService.generateNumbers();
  }
}
