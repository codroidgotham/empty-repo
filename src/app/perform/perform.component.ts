import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
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
  Controls$: Observable<any>
  Threats$: Observable<any>
  Vulnerabilities$: Observable<any>

  datasource = [{ threat: '', Impact: '', Controls: '', Vulnerabilities: '', Likelihood: '', add: '' }];
  displayedColumns = ['threat', 'Impact', 'Controls', 'Vulnerabilities', 'Likelihood', 'add']

  form: FormGroup
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, private dataService: FetchDataService) {









  }
  ngAfterViewInit(): void {
    console.log("initilized view")
  }



  ngOnInit(): void {

    this.Classes$ = this.route.data.pipe(map(val => val["data"]))
    


    // this.route.data.pipe(map(val => val["data"])).subscribe(val => this.Classes = val)
    this.form = this.fb.group({
      Classe: ["", Validators.required],
      Threat: ["", Validators.required],
      Impact: ["", Validators.required],
      Vulnerabilities: [[], Validators.required],
      Likelihood: ["", Validators.required],
      Controls: ["", Validators.required]

    })
    this.form.controls["Classe"].valueChanges.subscribe(val => {
      this.form.controls["Threat"].reset()
      this.form.controls["Impact"].reset(); 
      
      
      this.Vulnerabilities$ = of(null);this.Controls$=of(null); this.form.controls["Likelihood"].reset(); this.Threats$ = this.dataService.fetchAllThreats();
    }
    )


    this.form.controls["Threat"].valueChanges.subscribe(val => {console.log("Threat Value changed");
      this.Vulnerabilities$ = this.dataService.fetchAllVulnerabilities().pipe(
        map(
          val => val.filter(
            ve => { return ve.threatIds.some((vte) => vte == this.form.controls["Threat"].value.threatId) }
          )
        )
      ); this.Controls$ = this.dataService.fetchAllControls();
    }


    )


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

  addRiskRow() {

  }
  addThreat() { }

  addVulnerability() { }

  addControl() { }

}
