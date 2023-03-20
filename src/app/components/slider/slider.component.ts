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
   width:number = 850
   images: string[] = ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6",
   "slide7", "slide8", "slide9", "slide10", "slide11", "slide12"]
 
 

  constructor(){
  
    this.interval = setInterval(()=>{
      
      if(this.slidePosition === 12){

        this.marginValue = "850px"
        this.slidePosition = 0
        
      }
      this.marginValue = (this.slidePosition*-this.width).toString() + "px"
      this.slidePosition++
      console.log(this.marginValue);
      console.log(this.slidePosition);
    }, 2000)
  
  }



  

  

}
