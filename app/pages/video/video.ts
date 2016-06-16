import {Page, NavController} from 'ionic-angular';
import {TubeService} from '../../providers/tube-service/tube-service';
import {SinglevideoPage} from '../singlevideo/singlevideo';

/*
  Generated class for the VideoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/video/video.html',
  providers: [TubeService]
})
export class VideoPage {
  public videos: any;
  
  constructor(public nav: NavController, public tubeService: TubeService) {
    this.loadVideos();
    this.nav = nav;
  }
  
  loadVideos() {
    this.tubeService.load()
    .then(data => {
      this.videos = data;
      console.log(this.videos);
    });  
  }
  
  watchVid(id){
    this.nav.push(SinglevideoPage, {vidID: id});
  }
}
