import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    
    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "Debe ingresar un email válido" },
    ],
    
      password: [
      { type: "required", message: "La contraseña es obligatoria"},
      { type: "minlength", message: "La contraseña debe contener como minimo 5 caracteres"},
      { type: "maxlength", message: "La contraseña debe contener como maximo 15 caracteres"} 
      ] }

  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private NavCtrl: NavController, private storage: Storage) { 
    this.loginForm = this.formBuilder.group (
      {
        email: new FormControl(
          "",
          Validators.compose(
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15)
          ]
          )
        )
      }
    )
  }
  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.NavCtrl.navigateForward("/menu/home");
   }).catch(err => {
    this.errorMessage = err;
    console.log(this.errorMessage);
  })
  }

  goToRegister() {
    this.NavCtrl.navigateForward("/register");
  }

  goToFacebook(){
    window.open('https://www.facebook.com/')
  }

  goToGoogle(){
    window.open('https://mail.google.com/')
  }  

}