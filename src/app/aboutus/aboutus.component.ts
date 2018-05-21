import { Component, OnInit } from '@angular/core';
import {GMapModule} from 'primeng/gmap';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})


export class AboutusComponent  {

//   options: any;
//   google: any;
//   overlays: any[];

//   map: google.maps.Map;

//   setMap(event) {
//       this.map = event.map;
//   }

//   ngOnInit() {
//       const bounds = this.google.maps.LatLngBounds();
//       this.overlays = [
//           this.google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title: 'Konyaalti'}),
//           this.google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title: 'Ataturk Park'}),
//           this.google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title: 'Oldtown'}),
//       ];
//       // ... extend bounds
//       this.overlays.forEach(marker => {
//           bounds.extend(marker.getPosition());
//       });

//       setTimeout(() => { // map will need some time to load
//           this.map.fitBounds(bounds); // Map object used directly
//       }, 1000);
//   }
 }

