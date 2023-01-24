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
 
  Classes$:Observable<any>
  Classes:any[]

  datasource=[{Confidentiality:'',Integrity:'',Availability:'',threat: '', Impact: '', Vulnerabilities: '', Likelihood: '',add:'',delete:''}];
  displayedColumns=['Confidentiality','Integrity','Availability','threat', 'Impact', 'Vulnerabilities', 'Likelihood','add','delete']
  
  form:FormGroup
  constructor(private fb:FormBuilder,private route:ActivatedRoute, private dialog:MatDialog, private dataService: FetchDataService){
    this.form=this.fb.group({
      Class:["",Validators.required],
      Threat:["",Validators.required],
      Impact:["",Validators.required],
      Vulnerabilities:[[],Validators.required],
      Likelihood:["",Validators.required],
      

    })
    
    
  }



  ngOnInit(): void {

    this.Classes$=this.route.data.pipe(map(val=>val["data"]))
    this.route.data.pipe(map(val=>val["data"])).subscribe(val=>this.Classes=val)
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
changeValue(){
  console.log(this.datasource[0].Confidentiality.toString())
  this.datasource[0].Confidentiality=this.Classes[this.Classes.findIndex((ele)=>ele.Name==this.form.controls["Class"].getRawValue())].Confidentiality
  this.datasource[0].Availability=this.Classes[this.Classes.findIndex((ele)=>ele.Name==this.form.controls["Class"].getRawValue())].Availability
  this.datasource[0].Integrity=this.Classes[this.Classes.findIndex((ele)=>ele.Name==this.form.controls["Class"].getRawValue())].Integrity
 
}

}
