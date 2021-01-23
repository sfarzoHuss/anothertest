import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
     @Input() name='rony rizk';
     @Input() field='abra kadabra';
     @Input() imageurl='https://cdn.pixabay.com/photo/2020/10/05/10/29/horse-5628881_960_720.jpg';
  constructor() { 
   
   }

  ngOnInit(): void {
  
  }

}
