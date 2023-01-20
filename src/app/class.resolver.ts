import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Class } from './Models/Class';
import { FetchDataService } from './fetch-data.service';
import { map, Observable } from 'rxjs';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassResolver implements Resolve<any> {
  constructor(private dataService:FetchDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataService.fetchAllClasses().pipe(map(val=>val,first()))
  }
}
