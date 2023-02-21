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
      Integrity: ["", Validators.required],
      Availability: ["", Validators.required]},
      )
  }
  insertClass(){
    if (this.form.valid){this.dataService.fetchAllClasses().subscribe(val=>{const len=Object.values(val).length
      console.log(this.form.getRawValue())
      const obj={"Name":this.form.controls["Name"].getRawValue(),"Confidentiality":parseInt(this.form.controls["Confidentiality"].getRawValue()),
      "Integrity":parseInt(this.form.controls["Integrity"].getRawValue()),"Availability":parseInt(this.form.controls["Availability"].getRawValue())}
      // public string Name { get; set; } = string.Empty;
      // public Guid? ParentId { get; set; }
      // public int? Confidentiality { get; set; }
      // public int? Availability { get; set; }
      // public int? Integrity { get; set; }
      // public DateTime? ReviewDueOn { get; set; }
      // public DateTime? LastReviewedOn { get; set; }













      // const a = [
      //   {
      //     "op": "replace",
      //     "path": "/Name",
      //     "value": obj.Name
      //   },
      //   {
      //     "op": "replace",
      //     "path": "/Confidentiality",
      //     "value": obj.ConfidentialityLevel
      //   },
      //   {
      //     "op": "replace",
      //     "path": "/Integrity",
      //     "value": obj.IntegrityLevel
      //   },
      //   {
      //     "op": "replace",
      //     "path": "/Availability",
      //     "value": obj.AvailabilityLevel
      //   }
      // ]



      console.log("retrieved value",JSON.stringify(obj))
      this.dataService.insertClass(obj).subscribe()
      this.dialogRef.close()
    
    
    })}
    
    
    // this.dataService.insertClass()
  }
close(){
  this.dialogRef.close();
}

}
