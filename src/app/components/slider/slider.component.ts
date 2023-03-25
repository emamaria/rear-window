import { Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
   getScreenWidth: any;
   marginValue: string =""
   interval:any
   slidePosition:number = 1
   bigSliderSize: number = 850
   midSliderSize: number = 425
   smallSliderSize: number = 250
   width:number = 0
   
   images: string[] = ["slide1", "slide2", "slide3", "slide4"]
 

  constructor(){
    this.getScreenWidth = window.innerWidth;
    //uso el HostListener para que me detecte desde que arranca la app como durante
    //el tamaño al que esta viendo el usuario y segun el tamaño cambir el width del px con
    //que hay que desplazar el slider
    this.width = (this.getScreenWidth <= 600)?this.smallSliderSize:(this.getScreenWidth <= 900)?this.midSliderSize:this.bigSliderSize
  }

  ngOnInit(){
   
    this.interval = setInterval(()=>{
      
      if(this.slidePosition === 4){

        this.marginValue = this.width.toString()
        this.slidePosition = 0
        
      }
      this.marginValue = (this.slidePosition*-this.width).toString() + "px"
      this.slidePosition++
      console.log(this.marginValue);
      console.log(this.slidePosition);
    
    }, 2000)
  
    
  }

 @HostListener('window: resize',['$event'])
 onWindowResize(){
  this.getScreenWidth = window.innerWidth;
  this.width = (this.getScreenWidth <= 600)?this.smallSliderSize:(this.getScreenWidth <= 900)?this.midSliderSize:this.bigSliderSize
  
  // (this.getScreenWidth <= 420)?this.smallSliderSize:(this.getScreenWidth >= 883)?this.bigSliderSize:this.midSliderSize
  console.log("este width", this.width);
 } 


}
