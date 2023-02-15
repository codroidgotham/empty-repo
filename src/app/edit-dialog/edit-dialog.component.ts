import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import * as moment from 'moment'
import { FetchDataService } from '../fetch-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  enum 
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,private dataService:FetchDataService,@Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    console.log(this.data)
    this.form = this.fb.group({Name: [this.data.name, Validators.required],
      Confidentiality: [this.data.confidentialityLevel.toString(), Validators.required],
      Integrity: [this.data.integrityLevel.toString(), Validators.required],
      Availability: [this.data.availabilityLevel.toString(), Validators.required]},
      )

    // this.form.controls["Confidentiality"].setValue(1)
  }

  close(){
    this.dialogRef.close()
  }


  updateClass(){
    const obj={"Name":(this.form.controls["Name"].getRawValue()),"ConfidentialityLevel":parseInt(this.form.controls["Confidentiality"].getRawValue())  ,
      "IntegrityLevel":parseInt(this.form.controls["Integrity"].getRawValue()) ,"AvailabilityLevel":parseInt(this.form.controls["Availability"].getRawValue())}
    this.dataService.updateClass(obj,this.data.id).subscribe((val)=>console.log)
    console.log("update class hit",)
    this.dialogRef.close()
  }

  
}







