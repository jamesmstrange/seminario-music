import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists: any;
  localArtists: any;
  song = {
    name: '', 
    playing: false,
    preview_url: ''
  }
  currentSong: any;
  newTime: any;
  albums: any;
  constructor(private musicServices: MusicService, private modalController: ModalController) {}

  ionViewDidEnter(){
    this.musicServices.getArtists().then(lisArtists =>{
      this.artists = lisArtists;
      console.log("variable artist", this.artists);
    })

    this.localArtists = this.musicServices.getArtistsFromJson();
    console.log(this.localArtists.artists);
    this.musicServices.getAlbums().then(listAlbums => {
      this.albums = listAlbums;
    })
  }

  async showSongs(artist:any){
    //console.log(artist);
    const songs = await this.musicServices.getArtistsTracks(artist.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          artist: artist.name
        }
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  async showAlbumSongs(album:any){
    //console.log(artist);
    const songs = await this.musicServices.getAlbumsTracks(album.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          name: album.name
        }
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  play(){
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime =
      (1 / this.currentSong.duration) *
      this.currentSong.currentTime;
    })
    this.song.playing = true;
  }

  pause(){
    this.currentSong.pause();
    this.song.playing = false; 
  }

  parseTime(time = "0.00"){
    if (time){
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if(minutes.length == 1){
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60 ).toString();
      if (seconds.length == 1){
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds
    }
    else{
      return "0:00"
    }
  }
}