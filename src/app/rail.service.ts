
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RailService {

constructor(private myhttp: Http) {}
userhttp(details: any) {
    console.log('hello');
   return this.myhttp.post('https://railway-3b618.firebaseio.com/data.json', details);
    } }
