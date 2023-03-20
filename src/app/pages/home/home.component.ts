import { Component } from '@angular/core';
import { MoviesService } from '../../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public plot:string =  ""
  public characters: string[] = []

  

  constructor(private api: MoviesService){
    this.getPlot()
   }
 
   getPlot(){
     this.api.getPlot().subscribe((data: any) => console.log(data))
   }

}
