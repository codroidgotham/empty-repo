import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { ClassesComponent } from './classes/classes.component'
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

const routes:Routes=[{path:"",component:AboutComponent},{path:"classes",component:ClassesComponent},{path:"**",component:AboutComponent}]
@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatIconModule,MatListModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatMenuModule,RouterModule.forRoot(routes),HttpClientModule
  ,MatCardModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
