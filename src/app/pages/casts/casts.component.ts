import { Component } from '@angular/core';
import { MoviesService } from '../../movie.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.css']
})
export class CastsComponent {

  constructor(private api: MoviesService ){
    console.log(api.getCastBio());
      
       console.log(api.actorsBio); 
  }

   get actorBio(){
    return this.api.actorsBio
   }



}
