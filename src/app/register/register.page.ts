import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
   validation_messages = {
    
    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "Debe ingresar un email válido" },
    ],
  
      password: [
      { type: "required", message: "La contraseña es obligatoria"},
      { type: "minlength", message: "La contraseña debe contener como minimo 5 caracteres"},
      { type: "maxlength", message: "La contraseña debe contener como maximo 15 caracteres"} 
      ],
      
      name: [
        { type: "required", message: "El nombre es obligatoria"},
        { type: "minlength", message: "El nombre debe contener como minimo 3 letras"},
        { type: "pattern", message: "Caracter invalido"} 
        ],

        last_name: [
          { type: "required", message: "El apellido es obligatorio"},
          { type: "minlength", message: "El apellido debe tener minimo 4 letras"},
          { type: "pattern", message: "Caracter invalido"} 
          ]

    }
  constructor(
    private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group(
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
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(3),
              Validators.pattern('^[a-zA-Z]+$')

            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(4),
              Validators.pattern('^[a-zA-Z]+$')

            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.back()
  }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }
}