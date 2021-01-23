import { Component, OnInit} from '@angular/core';
import { DoctorsComponent } from './doctors/doctors.component';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'appcomp';

  public Doctors : DoctorsComponent [] = [];
  constructor(private apicaller: HttpClient){
  
  }


    ngOnInit(){

      this.apicaller.get('http://localhost:3000/employees').subscribe((emps:any)=>{
        this.Doctors = emps;
      })
  
    }

  

  }


