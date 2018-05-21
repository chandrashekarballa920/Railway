import { Component, OnInit } from '@angular/core';
import { MyPipe } from './time.pipe';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {SplitButtonModule} from 'primeng/splitbutton';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private user: any = {};
  today = Date();
    constructor(private datahttp: Http, private route: ActivatedRoute) {}
  ngOnInit() {

    }
}

