import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @ViewChild('f', {static: false}) numbersForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
