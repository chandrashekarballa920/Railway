import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {
  train: String;
  constructor() { }

  ngOnInit() {
  }

  pnrs() {
    alert('press ok to pnr status');
    window.open().document.write('<h1>Breath Is Confirmed</h1><br> YOUR COMPARTMENT NUMBER: S12 SEAT NO: 98');
  }

}
