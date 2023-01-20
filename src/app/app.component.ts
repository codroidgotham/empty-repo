import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RAclient';
  loading=false;
  constructor(private router:Router){
    this.router.events.subscribe((val:RouterEvent)=>this.checkEvent(val))
  }
  checkEvent(val:RouterEvent){
    if (val instanceof NavigationStart) this.loading=true;
    if (val instanceof NavigationEnd) this.loading=false;
    if (val instanceof NavigationCancel) this.loading=false;
    if (val instanceof NavigationError) this.loading=false;
  }

}
