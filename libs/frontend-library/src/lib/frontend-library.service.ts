import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrontendLibraryService {
  baseUrl: string = 'https://api.github.com/'

  constructor(private http: HttpClient) { }

  getRepos(gitUserName:string):Observable<any>{
    return this.http.get(this.baseUrl+'users/'+gitUserName+'/repos')
  }
}
