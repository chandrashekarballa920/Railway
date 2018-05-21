import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyRoutes} from './myroutes/route.module';
import {FormsModule, NgModel, NgControl, FormGroup, ReactiveFormsModule, FormControlName} from '@angular/forms';
import { Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PnrComponent } from './pnr/pnr.component';
import { TimingComponent } from './timing/timing.component';
import {RailService} from './rail.service';
import {HttpModule} from '@angular/http';
import { SingupComponent } from './auth/singup/singup.component';
import { FooterComponent } from './footer/footer.component';
import { SingService } from './sing.service';
import { AccordionModule } from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {SplitButtonModule} from 'primeng/splitbutton';
import { GrowlModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {DataViewModule} from 'primeng/dataview';
import {GMapModule} from 'primeng/gmap';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    AboutusComponent,
    PnrComponent,
    TimingComponent,
    SingupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule , FormsModule, HttpModule,
     RouterModule, MyRoutes,  AccordionModule, SplitButtonModule , GrowlModule , GMapModule , PasswordModule , DataViewModule
  ],
  providers: [RailService, SingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
