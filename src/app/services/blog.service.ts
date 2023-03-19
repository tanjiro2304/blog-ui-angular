import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/blog';

  //Dependency Injection
  constructor(private http:HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBlog(blogId:number):Observable<Blog>{
    return this.http.get<Blog>(this.baseUrl + '/findById/' + blogId);
  }

  getAllBlog():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.baseUrl + '/findAll/');
  }

  // errorHandl(error){
  //   let errorMessage ='';
  //   if(error.error instanceof ErrorEvent){
  //     errorMessage = error.error.message;
  //   }else{
  //     errorMessage = `Error Code: ${error.status}\nMessage:@{error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() =>{
  //     return errorMessage;
  //   });
  // }
  
}
