import {Page, NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the PicturePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/picture/picture.html',
})
export class PicturePage {
  public myImage: string;
  
  constructor(public nav: NavController) {}
  
  
  takePic(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.myImage = `data:image/jpeg;base64,${imageData}`;
    }, (err) => {
      console.log(err);  
    });  
    
  }
}
