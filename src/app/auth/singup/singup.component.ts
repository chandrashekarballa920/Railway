import { Component, OnInit } from '@angular/core';
// folder inside folder we have to use ../../

import {FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SingService } from '../../sing.service';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})



export class SingupComponent implements OnInit  {
  username = FormGroup;
  mymail: string;
  pass: string;
  singupdetails = [{ma: '', pa: ''}];
  getdata = [];
constructor( private Sing: SingService) {}

ngOnInit() {
  this.getdata = this.Sing.data();
}

sendtorail() {
  this.singupdetails.push({ma: this.mymail, pa: this.pass});
  this.Sing.myhttp(this.singupdetails).subscribe();
}
  }


