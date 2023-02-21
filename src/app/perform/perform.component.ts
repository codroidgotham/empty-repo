import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, first, map, Observable, of } from 'rxjs';
import { Class } from '../Models/Class';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatSnackBarConfig,MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog, private dataService: FetchDataService,private snack:MatSnackBar) {









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


    this.form.controls["Threat"].valueChanges.subscribe(val => {console.log(val.id);
      this.Vulnerabilities$=         this.Threats$.pipe(map(threats=>threats.filter((threat)=>threat.id==val.id)[0].associatedVulnerabilities))
      // 
       this.Controls$ = this.dataService.fetchAllControls().pipe(first());
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
    let tmp1;
    const obj = { "ClassName":(this.form.controls['Classe'].value.Name),"Threat": (this.form.controls['Threat'].value.statement), "Impact":this.form.controls['Impact'].value ,
    "Controls":this.a.selectedOptions.selected.map(o=>o.value.statement),"Vulnerabilities":this.b.selectedOptions.selected.map(o=>o.value.statement),"Likelihood": this.form.controls['Likelihood'].value,"Risk":'H' };
    if (this.form.valid)
    {
      this.dataService.insertRiskRow(obj).pipe(first()).subscribe(
        val=>{
          console.log("value",val);
          tmp1=val;
          console.log("just assigned",tmp1);
          if (val){
             this.partialReset();
            this.opensnackbar("row successfully inserted!")
          }else{
            this.opensnackbar("row could not be inserted!")
          }
        }

      )
    }

    
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

  opensnackbar(message){
    this.snack.open(message,"");
    setTimeout(()=>this.snack.dismiss(),3000)

  }
  

}
