import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public latitude: number =  52.516274;
  public longitude: number = 13.377704;
  public reverseGeocodeResult: string;
  
  public searchString: string = "Brandenburger Tor, Berlin";
  public forwardGeocodeResult: string;

  constructor(public navCtrl: NavController, private nativeGeocoder: NativeGeocoder) { }

  public ionViewDidLoad(): void {
    this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude)
      .then((result: NativeGeocoderReverseResult) => this.reverseGeocodeResult = JSON.stringify(result))
      .catch((error: any) => console.log(error));

    this.nativeGeocoder.forwardGeocode(this.searchString)
      .then((coordinates: NativeGeocoderForwardResult) => this.forwardGeocodeResult = 'The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
      .catch((error: any) => console.log(error));
  }

}