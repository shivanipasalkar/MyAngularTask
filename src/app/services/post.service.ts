import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
constructor (private http: HttpClient){}
getAllPosts():Observable<any> {
 
  return this.http.get(environment.apiAddress+"/posts")
  .pipe(catchError((error)=>{
    return throwError(()=> new Error(error.message))
  })) ;
}
}
