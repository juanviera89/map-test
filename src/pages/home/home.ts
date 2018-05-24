import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Component } from "@angular/core/";
 
 import { Platform } from 'ionic-angular';
 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage {
   map: GoogleMap;
   mapElement: HTMLElement;
   constructor(private googleMaps: GoogleMaps, public platform: Platform) {
 
     // Wait the native plugin is ready.
     platform.ready().then(() => {
       this.loadMap();
     });
   }
 
   // Don't use the ngAfterViewInit(). The native plugin is not ready.
   //ngAfterViewInit() {
   // this.loadMap();
   //}
 
  loadMap() {
     this.mapElement = document.getElementById('map');
 
     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
          lat: -37.4691695,
          lng: -72.3688463
         },
         zoom: 18,
         //tilt: 30
       }
     };
 
     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 
     // Wait the MAP_READY before using any methods.
     this.map.one(GoogleMapsEvent.MAP_READY)
       .then(() => {
         console.log('Map is ready!');
 
         // Now you can use all methods safely.
         this.map.addMarker({
             title: 'Un sitio de Cooprinsem',
             icon: '#488aff',
             animation: 'DROP',
             position: {
               lat: -37.4691695,
               lng: -72.3688463
             }
           })
           .then(marker => {
             marker.on(GoogleMapsEvent.MARKER_CLICK)
               .subscribe(() => {
                 //alert('clicked');
               });
           });
 
       });
   }
 }