import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey:string = environment.apiKey

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

}
