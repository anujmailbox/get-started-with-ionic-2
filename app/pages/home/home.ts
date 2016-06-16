import {Page,NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {VideoPage} from '../video/video';
import {PicturePage} from '../picture/picture';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public nav: NavController) {
    this.nav = nav;   
  }
  
  about(){
    this.nav.push(AboutPage);
  }
  
  video(){
    this.nav.push(VideoPage);
  }
  
  picture(){
    this.nav.push(PicturePage);
  }
}
