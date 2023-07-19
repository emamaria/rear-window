// import { leadingComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { MoviesService } from '../../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public plot:string = `Professional photographer L. B. Jefferies has broken his leg and must rest at home.
  The boredom of being confined, leads him to observe what the neighbors are doing from his window.
  One day he observes a suspicious behavior from a neighbor who may have murdered his wife. Jeff will try to investigate
  what has happened with the help of his girlfriend Lisa and his nurse Stella.`
  
  
  

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
