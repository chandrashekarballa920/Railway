import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SingService {
  constructor(private http: Http) {

    }

myhttp(singupdetails: any) {
    console.log('data base');
    return this.http.post('https://railway-3b618.firebaseio.com/data.json', singupdetails);
}
 data() {
     return [{id : '1', name : 'Ambani' , company : 'reliance'},
{id : '2', name : 'laxmi vittal' , company : 'birla'}
];
    }
}
