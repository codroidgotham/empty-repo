import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Class, LoginResult } from './Models/Class';

function urlBuilder(b:string){
  
  const a="https://localhost:7233/api";
  return a+b
}

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  constructor(private fetcher:HttpClient) { }


  fetchAllClasses(){
      return this.fetcher.get<any>     
      (urlBuilder('/AssetCategory'))

  }

  fetchToken(obj){
    return this.fetcher.post<LoginResult>(urlBuilder("/Account/Login"),obj)
  }



  fetchAllThreats(){
    return this.fetcher.get('https://localhost:7233/api/Threat')

}

fetchAllControls(){
  return this.fetcher.get('https://localhost:7233/api/control')
}


fetchAllVulnerabilities(){
  return this.fetcher.get<any[]>('https://localhost:7233/vulnerabilities')
}




  insertClass(body){
    return this.fetcher.post("https://localhost:7233/api/AssetCategory",body)
    
  }

  updateClass(body,id){
    const url="https://localhost:7233/api/AssetCategory/"+id
   console.log(body)
    return this.fetcher.patch(url,body)
  }

  deleteClass(id){
    const url="https://localhost:7233/api/AssetCategory/"+id
    console.log()
    return this.fetcher.delete(url);
  }

  insertRiskRow(body){
    return this.fetcher.post("http://localhost:9000/risk",body)
    
  }
}

