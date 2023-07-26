import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private NavCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

    logout(){
      this.storage.set('isUserLoggedIn', false);
      this.NavCtrl.navigateRoot('/login');

    }

    introin(){
      this.NavCtrl.navigateForward('/intro');
    }

    goToSupport(){
      window.open('https://support.spotify.com/co-es/');
    }

    goToSettings(){
      this.NavCtrl.navigateForward('/menu/settings');
      this.menu.close();
    }

    goToHome(){
      this.NavCtrl.navigateRoot("/menu/home");
      this.menu.close();
    }

   }


