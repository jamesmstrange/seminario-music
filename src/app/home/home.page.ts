import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      title: "Back to the future",
      img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/back_to_the_future_robert_zemeckis.png?fit=1000%2C667&quality=50&strip=all&ssl=1",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum." 
    },
    {
      title: "Nirvana",
      img: "https://files.lafm.com.co/assets/public/2022-08/nirvana.jpg?VersionId=._0.1VSwg1a8e9gGpfcdMgiYGfxlrv8l",
      icon: "barbell-outline",
      description: "Nirvana (Aberdeen, Washington, 1987 – 1994) fue una de las bandas de más corto recorrido y al mismo tiempo de las más influyentes en el rock de finales del siglo XX, precursora, además, del movimiento grunge, sus integrantes fueron Kurt Cobain, Dave Grohl y Krist Novoselic" 
    },
    {
      title: "Titulo Tres",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    },
    {
      title: "Titulo Tres",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    },


    {
      title: "Titulo Tres",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    }



  ]






  constructor() {}

}
