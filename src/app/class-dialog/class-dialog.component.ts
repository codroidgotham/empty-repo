import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import * as moment from 'moment'
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.css']
})
export class ClassDialogComponent implements OnInit {


  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClassDialogComponent>,private dataService:FetchDataService
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({Name: ["", Validators.required],
      Confidentiality: ["", Validators.required],
      Integrity: [moment(), Validators.required],
      Availability: ["", Validators.required]},
      )
  }
  insertClass(){
    
    this.dataService.fetchAllClasses().subscribe(val=>{const len=Object.values(val).length
      console.log(this.form.getRawValue())

      // const Name=this.form.controls["Name"].getRawValue();
      // const Confidentiality=
      const obj={"Name":this.form.controls["Name"].getRawValue(),"Confidentiality":this.form.controls["Confidentiality"].getRawValue(),
      "Integrity":this.form.controls["Integrity"].getRawValue(),"Availability":this.form.controls["Availability"].getRawValue(),"classId":len+1}
      // const obj={Name:Name,Confidentiality:Confidentiality,Integrity:Integrity,Availability:Availability,classId:len+1}
      console.log("retrieved value",JSON.stringify(obj))
      this.dataService.insertClass(obj).subscribe()
      this.dialogRef.close()
    
    
    })
    
    // this.dataService.insertClass()
  }
close(){
  this.dialogRef.close();
}

}
