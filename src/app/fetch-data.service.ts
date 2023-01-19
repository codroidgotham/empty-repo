import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Class } from './Models/Class';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private fetcher:HttpClient) { }


  fetchAllClasses(){
      return this.fetcher.get('http://localhost:9000/')

  }

  insertClass(body){
    return this.fetcher.post("http://localhost:9000/classes",body)
    
  }
}
