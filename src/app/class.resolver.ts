import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Class } from './Models/Class';
import { FetchDataService } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class ClassResolver implements Resolve<Class[]> {
  constructor(private dataService:FetchDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Class[]> {
    return this.dataService.fetchAllClasses()
  }
}
