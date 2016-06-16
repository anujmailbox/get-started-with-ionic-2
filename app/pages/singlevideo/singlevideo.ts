import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the SinglevideoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/singlevideo/singlevideo.html',
})
export class SinglevideoPage {
  public embedID: string;
  public vidLink: string;
  
  constructor(public nav: NavController, public params: NavParams) {
    this.getLink();
  }
  
  getLink(){
    this.embedID = this.params.get('vidID');
    this.vidLink = `https://www.youtube.com/embed/${this.embedID}`;
  }
}
