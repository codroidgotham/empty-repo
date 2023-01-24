import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Class } from '../Models/Class';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-perform',
  templateUrl: './perform.component.html',
  styleUrls: ['./perform.component.css']
})
export class PerformComponent implements OnInit {
  form:FormGroup;
  Classes$:Observable<any>
  datasource=[];
  constructor(private fb:FormBuilder,private route:ActivatedRoute, private dialog:MatDialog, private dataService: FetchDataService){
    
    this.form=this.fb.group(
      {
        Class:["",Validators.required],
        Threat:["",Validators.required],



      }


    )
  }
  ngOnInit(): void {

    this.Classes$=this.route.data.pipe(map(val=>val["data"]))
    
  }

  addClass(){
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


}
