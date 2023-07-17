import { Component } from '@angular/core';
import { MoviesService } from '../../movie.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.css']
})
export class CastsComponent {

  actorsBio: any[] = [
    {
      name: "James Maitland Stewart",
      birthDate: "May 20th 1908",
      birthPlace: "Indiana, Pennsylvania, USA",
      deathDate: "July 2nd 1997",
      img: "img1.jpg",
      quotes: "Learn from the masters, learn from your contemporaries. Always try to update yourself.",
    },
    {
      name: "Grace Patricia Kelly",
      birthDate: "November 12th 1929",
      birthPlace: "Philadelphia, Pennsylvania, USA",
      deathDate: "September 14th 1982",
      img: "img2.jpg",
      quotes: "Getting angry doesn't solve anything.",
    },
    {
      name: "Raymond William Stacey Burr",
      birthDate: "May 21th 1917",
      birthPlace: "New Westminster, Canada",
      deathDate: "September 12th 1993",
      img: "img3.jpg",
      quotes: "Over a period of time, if you have a successful show, then you have a devoted audience",
    },
    {
      name: "Thelma Ritter",
      birthDate: "February 14th 1905",
      birthPlace: "New York, New York, USA",
      deathDate: "February 5th 1969",
      img: "img4.jpg",
      quotes: "Nobody ever invented a polite word for a killing yet",
    },
    {
      name: "Wendell Corey",
      birthDate: "March 20th 1914",
      birthPlace: "Dracut, Massachusetts, USA",
      deathDate: "November 8th 1968",
      img: "img5.jpg",
      quotes: "",
    },
    {
      name: "Judith Evelyn",
      birthDate: "March 20th 1909",
      birthPlace: "Seneca, South Dakota, USA",
      deathDate: "May 7th 1967",
      img: "img6.jpg",
      quotes: "",
    }

  ]



  constructor(private api: MoviesService ){
    //aunque estaba haciendo llamada al api para obtener los datos de actores,
    //debido a que me he excedido en número de peticiones al mes  y ya no tengo acceso,
    //dejo creado estos datos en duro en local
    // console.log(api.getCastBio());
      
    //    console.log(api.actorsBio); 
  }

  get castsBio(){
    // return this.api.actorsBio
    return this.actorsBio
    
   }





}
