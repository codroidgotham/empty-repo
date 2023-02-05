import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { map, Observable } from 'rxjs';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FetchDataService } from '../fetch-data.service';
import { Class } from '../Models/Class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  Classes$;

  constructor(private router: Router, private dataService: FetchDataService, private route: ActivatedRoute, private dialog: MatDialog) {

  }



  ngOnInit(): void {
    console.log("initialized")
  this.dataService.fetchAllClasses()
    this.Classes$ = this.route.data.pipe(map(val=>val["data"]))

    
    


    // .subscribe((val)=>this.Classes=(val))
    // setTimeout(()=>console.log(this.Classes),8000)
  }
  addClass() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(ClassDialogComponent, dialogConfig);

    dialogRef.
    
    afterClosed()

      .subscribe(val => this.Classes$=this.dataService.fetchAllClasses());


  }
  deleteClass(classId:number){
    this.dataService.deleteClass(classId).subscribe(val=>{
      if (val){
        this.Classes$=this.dataService.fetchAllClasses()
      }
    })
    
    
    
  }

  editClass(val){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = val;

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val=>this.Classes$=this.dataService.fetchAllClasses())
  }
  


}
