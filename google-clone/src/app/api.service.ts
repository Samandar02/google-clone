import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { of } from 'rxjs';

@Injectable()
export class ApiService {
  private readonly URL
  constructor(private http:HttpClient) {
   this.URL = `https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyDD7HpaFEK8LTLQ6-_mlEfC2jPnNkC7SwY&cx=765b63167286e4afa`
  }
  public repoStory = new Subject<any>();
  search(q:string){
    return this.http.get(this.URL+`&q=${q}`)
  }
  setResult(res:any){
    this.repoStory.next(res);
  }
  getResult(){
    return this.repoStory.asObservable();
  }

}