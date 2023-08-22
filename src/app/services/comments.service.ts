import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
 
  constructor (private http: HttpClient){}
  getAllComments() {
   
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .pipe(catchError((error)=>{
      return throwError(()=> new Error(error.message))
    })) ;
  
  }
}


