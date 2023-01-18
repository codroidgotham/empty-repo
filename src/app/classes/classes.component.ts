import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';
import { Class } from '../Models/Class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  
  Classes;
  constructor(private dataService:FetchDataService){
    
  }

  ngOnInit(): void {
      console.log("initialized")
      this.dataService.fetchAllClasses()




      .subscribe((val)=>this.Classes=(Object.values(val)))
      setTimeout(()=>console.log(this.Classes),8000)
  }
  
}
