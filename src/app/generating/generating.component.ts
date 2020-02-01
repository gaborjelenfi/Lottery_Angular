import { Component, OnInit } from '@angular/core';
import { GeneratingNumberService } from './generating-number.service';

@Component({
  selector: 'app-generating',
  templateUrl: './generating.component.html',
  styleUrls: ['./generating.component.css']
})
export class GeneratingComponent implements OnInit {

  constructor(public generatingNumberService: GeneratingNumberService) { }

  ngOnInit() {
  }

}
