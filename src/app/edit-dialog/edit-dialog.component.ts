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

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,private dataService:FetchDataService,@Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({Name: [this.data.Name, Validators.required],
      Confidentiality: [this.data.Confidentiality, Validators.required],
      Integrity: [this.data.Integrity, Validators.required],
      Availability: [this.data.Availability, Validators.required]},
      )
  }

  close(){
    this.dialogRef.close()
  }


  updateClass(){
    const obj={"Name":this.form.controls["Name"].getRawValue(),"Confidentiality":this.form.controls["Confidentiality"].getRawValue(),
      "Integrity":this.form.controls["Integrity"].getRawValue(),"Availability":this.form.controls["Availability"].getRawValue()}
    this.dataService.updateClass(obj,this.data.classId).subscribe((val)=>console.log)
    console.log("update class hit")
    this.dialogRef.close()
  }

  
}







