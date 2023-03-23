import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey:string = environment.apiKey

  mainCharacters: any[] = [
    {name: "L. B. Jefferies", img: "character1.jpg", role: "Jefferies, a celebrated photojournalist."},
    {name: "Lisa Carol Fremont", img: "character2.jpg", role: "Lisa Fremont, Jeff´s glamourous girlfriend."},
    {name: "Stella", img: "character3.jfif", role: "Jeff´s nurse."},
    {name: "Det.Lt.Thomas", img: "character4.jfif", role: "Detective and Jeff´s old friend."},
    {name: "Lars Thorwald", img: "character5.jfif", role: "The suspicious neighbor."},
    {name: "Miss Lonelyhearts", img: "character6.jfif", role: "Neighbor and  a single woman who is obssesed over finding love."}
  ]

  actorsId: string[] = ["nm0000071","nm0000038", "nm0179819", "nm0728812", "nm0000994"]
  

  actorsBio: any[] = []

 options = {
    headers: {
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    },
    params: {tconst: 'tt0047396'}
  }


  

  constructor(private http: HttpClient){ 
    
   
   
  }

  
  getPlot(){
    
    let url = 'https://online-movie-database.p.rapidapi.com/title/get-plots'
    return this.http.get(url, this.options);
   }

   getCharacters(){
    return this.mainCharacters
   }

   getCastBio():any{

    let url = "https://online-movie-database.p.rapidapi.com/actors/get-bio"

  
   this.actorsId.forEach((actor:string) => {
      this.http.get(url, { headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      },
      params: {nconst: actor} }).subscribe((data:any) => {
            console.log("cast data", data);
           this.actorsBio.push({
            name: data.name,
            birthDate: data.birthDate,
            deathDate: data.deathDate,
            birthPlace: data.birthPlace,
            img: data.image,
            nickName: data.nicknames[0],
            tradeMarks: [data.trademarks]
           })

           console.log("biografia", this.actorsBio);
          
          console.log(`ok ${actor}`);
    
      });
      
    }
  )
 
  
}

}
