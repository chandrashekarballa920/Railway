import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, FormGroup, FormControl, Validators, Validator, ReactiveFormsModule} from '@angular/forms';
import {RailService} from '../rail.service';
import {Observable} from 'rxjs/Observable';
import { AccordionModule } from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
// import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
// import * as firebase from 'firebase/app';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  {
trainname: string;
candidatename: string;
details = [{name: 'debasis', train: 'odisha'}];

cars: SelectItem[];
selectedCar: string;

constructor(private myrail: RailService) {}

sendtodb() {
  this.details.push({train: this.trainname, name: this.candidatename});
  this.myrail.userhttp(this.details).subscribe(

  );
}

}
