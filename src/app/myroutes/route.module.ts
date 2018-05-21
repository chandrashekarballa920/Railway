import { NgModule } from '@angular/core';
import { RouterModule , Route} from '@angular/router';
import { AppComponent } from '../app.component';
import { BookingComponent } from '../booking/booking.component';
import { TimingComponent } from '../timing/timing.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { PnrComponent } from '../pnr/pnr.component';
import { SingupComponent } from '../auth/singup/singup.component';
import { FormsModule, FormControl, FormGroup, FormControlName } from '@angular/forms';
import {GMapModule} from 'primeng/gmap';
const ROUTES: Route [] = [


    {path: 'home', component: AppComponent},
  {path : 'booking', component : BookingComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'pnr', component : PnrComponent},
  {path : 'singup', component : SingupComponent},
  {path : '***', redirectTo: 'home'}
  ];

@NgModule({
    imports: [FormsModule, RouterModule.forRoot(ROUTES)],
    declarations: [],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class MyRoutes {}
