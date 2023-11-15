import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactezNous, joueur } from './model.ts/joueurmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // post method
  addJoueur(data:joueur){
    return this.http.post<joueur>("http://localhost:3000/posts",data);
  }

  // get method
  getJoueur(){
    return this.http.get<joueur[]>("http://localhost:3000/posts");
  }

  deleteJoueur(id:number){
    return this.http.delete<joueur>("http://localhost:3000/posts/"+id);
  }

  //fetching data en edit
  fetchdata(id:number){
    return this.http.get<joueur>("http://localhost:3000/posts/"+id);
  }

  // update data
  updateJoueur(id:number,data:joueur){
    return this.http.put<joueur>("http://localhost:3000/posts/"+id,data);
  }
  // contactez nous
  contactezNous(data:contactezNous){
    return this.http.post<contactezNous>("http://localhost:3000/contacterNous",data);
  }
  //get contactez nous
  displayContactezNous(){
    return this.http.get<contactezNous[]>("http://localhost:3000/contacterNous");
  }
  deletequery(id:number){
    return this.http.delete<contactezNous>("http://localhost:3000/contacterNous/"+id);
  }
}
