import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Class } from './Models/Class';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private fetcher:HttpClient) { }


  fetchAllClasses(){
      return this.fetcher.get<any>('http://localhost:9000/')

  }

  fetchAllThreats(){
    return this.fetcher.get('http://localhost:9000/threats')

}

fetchAllControls(){
  return this.fetcher.get('http://localhost:9000/controls')
}


fetchAllVulnerabilities(){
  return this.fetcher.get<any[]>('http://localhost:9000/vulnerabilities')
}




  insertClass(body){
    return this.fetcher.post("http://localhost:9000/classes",body)
    
  }

  updateClass(body,id){
    const url="http://localhost:9000/classes/"+id
   
    return this.fetcher.patch(url,body)
  }

  deleteClass(id){
    const url="http://localhost:9000/classes/"+id
    console.log()
    return this.fetcher.delete(url);
  }

  insertRiskRow(body){
    return this.fetcher.post("http://localhost:9000/risk",body)
    
  }
}

