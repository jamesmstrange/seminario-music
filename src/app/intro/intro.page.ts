import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Back to the future",
      img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/back_to_the_future_robert_zemeckis.png?fit=1000%2C667&quality=50&strip=all&ssl=1",
      icon: "beer-outline",
      description: "El adolescente Marty McFly es amigo de Doc, un científico que ha construido una máquina del tiempo. Cuando los dos prueban el artefacto, un error fortuito hace que Marty llegue a 1955, año en el que sus padres iban al instituto y todavía no se habían conocido. Después de impedir su primer encuentro, Marty deberá conseguir que se conozcan y se enamoren, de lo contrario su existencia no sería posible." 
    },
    {
      title: "Nirvana",
      img: "https://files.lafm.com.co/assets/public/2022-08/nirvana.jpg?VersionId=._0.1VSwg1a8e9gGpfcdMgiYGfxlrv8l",
      icon: "barbell-outline",
      description: "Nirvana (Aberdeen, Washington, 1987 – 1994) fue una de las bandas de más corto recorrido y al mismo tiempo de las más influyentes en el rock de finales del siglo XX, precursora, además, del movimiento grunge, sus integrantes fueron Kurt Cobain, Dave Grohl y Krist Novoselic" 
    },
    {
      title: "El Principito",
      img: "https://img2.rtve.es/i/?w=1600&i=1677510955975.jpg",
      icon: "beer-outline",
      description: "El principito es una narración corta del escritor francés Antoine de Saint-Exupéry. La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad." 
    },
    {
      title: " Malcolm In The Middle",
      img: "https://m.media-amazon.com/images/I/81DzuM1tooL._RI_.jpg",
      icon: "beer-outline",
      description: "Malcolm es el tercer hijo de una familia particularmente extravagante y extraña. Junto a él viven: el segundo hijo Reese, un chico gamberro que no se ahorra intimidar a los chicos más pequeños; el cuarto hijo Dewie, un niño peculiar del que a menudo se burlan los hermanos Malcolm y Reese; su padre Hal, un hombre muy enamorado de su esposa Lois, una mujer autoritaria que está a cargo de la familia de Malcolm. El hijo mayor, Francis, fue enviado a la escuela militar por los mismos padres debido a su insubordinación." 
    },


    {
      title: "RE 2",
      img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/12/Resident-Evil-21-scaled.jpg?fit=2560%2C1321&quality=50&strip=all&ssl=1",
      icon: "beer-outline",
      description: "Sigue al policía novato Leon S. Kennedy y a la estudiante universitaria Claire Redfield, que se ven atrapados en una apocalíptica epidemia en Racoon City que ha transformado a su población en zombis mortíferos. Remake del clásico Resident Evil 2 de 1998." 
    }



  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

close () {
this.router.navigateByUrl("/home")
}


}