// import { leadingComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { MoviesService } from '../../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public plot:string = "Professional photographer L.B. 'Jeff' Jefferies breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Fremont and his visiting nurse Stella to investigate."
  
  

  get getCharacters(){

    return this.api.getCharacters()
  }
  

  constructor(private api: MoviesService){
 
   }
 
   getPlot(): any {
     //para tomar el plot pero de momento lo pongo en duro
    this.api.getPlot().subscribe((data: any) =>  {
      this.plot =  data.plots[1].text
      console.log(this.plot);
      
    })
      
    }

   

}
