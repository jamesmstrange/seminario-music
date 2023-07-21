import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Billie Eilish",
      img: "https://www.elnacional.cat/enblau/uploads/s1/36/86/91/21/billie-eilish.jpeg",
      description: "Billie Eilish Pirate Baird O'Connell, conocida simplemente como Billie Eilish, es una cantante y compositora estadounidense. Adquirió fama como artista cuando tenía 13 años, a raíz del sencillo (Ocean Eyes) que se publicó en 2015 en SoundCloud y volvió a lanzarse con un vídeo musical en YouTube en 2016, a la edad de 14 años, lo que la convirtió en un fenómeno viral. En 2017, publicó su EP Don't Smile at Me, producido por su hermano Finneas O'Connell." 
    },

    {
      title: "Nicki Nicole",
      img: "https://adnpositivo.com/wp-content/uploads/2023/05/nn.jpg",
      description: "Nicole Denise Cucco, conocida artísticamente como Nicki Nicole, es una cantante, rapera y compositora argentina. En 2019, saltó a la fama con el sencillo (Wapo traketero), logrando obtener millones de reproducciones en YouTube en un corto período de tiempo después de ser publicado." 
    },

    {
      title: "The Weeknd",
      img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2016%2F11%2Fthe-weeknd-puma-ignite-evoknit-white-olive-1.jpg?cbr=1&q=90",
      description: "Abel Makkonen Tesfaye conocido artísticamente como The Weeknd, es un cantante, rapero, compositor y productor discográfico canadiense nacionalizado estadounidense. Conocido por su versatilidad sónica y lirismo oscuro, su música explora el escapismo, el romance y la melancolía, y a menudo se inspira en experiencias personales. Ha recibido numerosos elogios, incluidos cuatro premios Grammy, 20 premios Billboard Music Awards, 17 premios Juno, seis American Music Awards, dos MTV Video Music Awards y nominaciones para un premio de la Academia, un premio Grammy Latino y un premio Primetime Emmy." 
    },

    {
      title: "Taylor Swift",
      img: "https://www.instyle.com/thmb/Z75zkwmRPwavJ0GR_IMJknzDm10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taylor-swift-2023-grammys-e3c15d7e2fdb412fb8f726aad0509500.jpg",
      description: "Taylor Alison Swift es una cantautora, productora, directora, actriz y empresaria estadounidense. Criada en Wyomissing, se mudó a Nashville a los 14 años para realizar una carrera de música country. Firmó con la compañía discográfica independiente Big Machine Records y se convirtió en la artista más joven contratada por Sony/ATV Music Publishing House. En 2006 lanzó su álbum debut homónimo, que la estableció como una estrella en la música Pop. Our Song, su tercer sencillo, la convirtió en la persona más joven en escribir temas de forma solista e interpretar una canción número uno en la lista de Hot Country Songs." 
    },

    {
      title: "Kendrick Lamar",
      img: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-kendrick-lamar-8918fd71-18be-4506-b53a-c9f493eed088.jpg",
      description: "Kendrick Lamar Duckworth es un rapero, compositor y productor discográfico estadounidense. Ha sido aclamado por críticos, músicos y fanáticos por sus vívidas letras y narraciones sobre sus experiencias y problemáticas dentro de la cultura afroamericana y del hip-hop, llegando a ser nombrado (la voz líder de una generación)." 
    }



  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

close () {
  this.storage.set("introShow", true);
this.router.navigateByUrl("/menu/home");

}


}