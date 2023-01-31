import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassesComponent } from './classes/classes.component'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassDialogComponent } from './class-dialog/class-dialog.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ClassResolver } from './class.resolver';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { RAsummaryComponent } from './rasummary/rasummary.component';
import { PerformComponent } from './perform/perform.component';
import {MatChipsModule} from '@angular/material/chips';
import { AssetsComponent } from './assets/assets.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddThreatDialogComponent } from './add-threat-dialog/add-threat-dialog.component';
import { AddVulnerabilityDialogComponent } from './add-vulnerability-dialog/add-vulnerability-dialog.component';
import { AddControlDialogComponent } from './add-control-dialog/add-control-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const routes: Routes = [{ path: "", component: AboutComponent },{path:"RiskAssessment",component:PerformComponent,resolve:{data:ClassResolver}},{path:"login",component:LoginComponent}, { path: "classes", component: ClassesComponent,resolve:{data:ClassResolver} }, { path: "**", component: AboutComponent }]
@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,

    ClassDialogComponent,
      LoginComponent,
      LoaderComponent,
      EditDialogComponent,
      RiskAssessmentComponent,
      RAsummaryComponent,
      PerformComponent,
      AssetsComponent,
      AddThreatDialogComponent,
      AddVulnerabilityDialogComponent,
      AddControlDialogComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatMenuModule, RouterModule.forRoot(routes), HttpClientModule
    , MatCardModule, MatTableModule, MatDialogModule, FormsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule,MatInputModule
  ,MatProgressSpinnerModule,MatChipsModule,MatGridListModule,FlexLayoutModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
