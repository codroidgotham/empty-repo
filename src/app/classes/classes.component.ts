import { Component, OnInit } from '@angular/core';
import { MatDialogConfig,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { FetchDataService } from '../fetch-data.service';
import { Class } from '../Models/Class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  
  Classes;
  
  constructor(private dataService:FetchDataService,private dialog:MatDialog){
    
  }

  

  ngOnInit(): void {
      console.log("initialized")
      this.dataService.fetchAllClasses()




      .subscribe((val)=>this.Classes=(val))
      setTimeout(()=>console.log(this.Classes),8000)
  }
  addClass() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(ClassDialogComponent, dialogConfig);
    
    // dialogRef.afterClosed()
    //     .pipe(
    //         filter(val => !!val),
    //         tap(() => this.coursesChanged.emit())

    //     )
    //     .subscribe();


}



}
