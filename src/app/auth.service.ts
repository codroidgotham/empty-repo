import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private dataService:FetchDataService) { }
  public tokenKey: string = "token";
  isAuthenticated():boolean{
    return this.getToken() !==null
  }

  getToken():string | null{
    return localStorage.getItem(this.tokenKey)
  }

  login(item){
    return this.dataService.fetchToken(item);
  }

}
