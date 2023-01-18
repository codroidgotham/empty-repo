import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import * as moment from 'moment'
@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.css']
})
export class ClassDialogComponent implements OnInit {


  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClassDialogComponent>
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group({description: ["", Validators.required],
      category: ["", Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: ["", Validators.required]})
  }


}
