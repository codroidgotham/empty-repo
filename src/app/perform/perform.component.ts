import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Class } from '../Models/Class';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { FetchDataService } from '../fetch-data.service';
import { MatSelectionList } from '@angular/material/list';
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
  @ViewChild('somecontrol')
  a:MatSelectionList

  @ViewChild('vulnerabilities')
  b:MatSelectionList

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
      Vulnerabilities: new FormControl([]),
      Likelihood: ["", Validators.required],
      Controls: new FormControl([])

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

    const obj = { "ClassName":(this.form.controls['Classe'].value.Name),"Threat": (this.form.controls['Threat'].value.statement), "Impact":this.form.controls['Impact'].value ,
    "Controls":this.a.selectedOptions.selected.map(o=>o.value.statement),"Vulnerabilities":this.b.selectedOptions.selected.map(o=>o.value.statement),"Likelihood": this.form.controls['Likelihood'].value,"Risk":'H' };
    if (this.form.valid)
    {
      this.dataService.insertRiskRow(obj).subscribe(
        val=>{
          if (val){
             this.partialReset();
            
          }
        }

      )
    }

    console.log(this.b.selectedOptions.selected.map(o=>o.value.statement))
  }
  addThreat() { }

  addVulnerability() { }

  addControl() { }

  partialReset(){
    
    this.form.controls["Threat"].reset()
      this.form.controls["Impact"].reset(); 
      
      
      this.Vulnerabilities$ = of(null);this.Controls$=of(null); this.form.controls["Likelihood"].reset(); this.Threats$ = this.dataService.fetchAllThreats();
      // this.form.clearValidators()
  }
  

}
