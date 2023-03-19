import { Component } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
   marginValue: string =""
   interval:any
   slidePosition:number = 1
   current:number = 0
   width:number = 600
 
 

  constructor(){
  
    this.interval = setInterval(()=>{
      
      if(this.slidePosition === 5){

        this.marginValue = "600px"
        this.slidePosition = 0
        
      }
      this.marginValue = (this.slidePosition*-this.width).toString() + "px"
      this.slidePosition++
      console.log(this.marginValue);
      console.log(this.slidePosition);
    }, 3000)
  
  }



  

  

}
