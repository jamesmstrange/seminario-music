import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
userImage = "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
photo: any;  
constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(1).then(userData => {
      //TODO
    })
  }

  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 100, 
      allowEditing: false, 
      resultType: CameraResultType.DataUrl, 
      source: CameraSource.Camera
    });
    this.photo = image.dataUrl;
    console.log(image.dataUrl)
  }

}
