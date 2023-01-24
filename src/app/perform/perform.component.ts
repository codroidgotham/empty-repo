import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class PerformComponent implements OnInit, AfterViewInit {

  Classes$: Observable<any>
  Classes: any[]

  datasource = [{ Confidentiality: '', Integrity: '', Availability: '', threat: '', Impact: '', Vulnerabilities: '', Likelihood: '', add: '', delete: '' }];
  displayedColumns = ['Confidentiality', 'Integrity', 'Availability', 'threat', 'Impact', 'Vulnerabilities', 'Likelihood', 'add', 'delete']

  form: FormGroup
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, private dataService: FetchDataService) {









  }
  ngAfterViewInit(): void {
    console.log("initilized view")
  }



  ngOnInit(): void {

    this.Classes$ = this.route.data.pipe(map(val => val["data"]))
    this.route.data.pipe(map(val => val["data"])).subscribe(val => this.Classes = val)
    this.form = this.fb.group({
      Classe: ["", Validators.required],
      Threat: ["", Validators.required],
      Impact: ["", Validators.required],
      Vulnerabilities: [[], Validators.required],
      Likelihood: ["", Validators.required],


    })


    this.form.valueChanges.subscribe((val) => { this.datasource[0].Confidentiality = val["Classe"].Confidentiality; this.datasource[0].Integrity = val["Classe"].Integrity; this.datasource[0].Availability = val["Classe"].Availability; console.log("in") })
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

      .subscribe(val => this.Classes$ = this.dataService.fetchAllClasses());
  }




}
