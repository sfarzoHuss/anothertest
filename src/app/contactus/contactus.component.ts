import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    name = '';
    email='';
    subject ='';
    content='';

constructor ( private apicaller: HttpClient){}
   
    sendEmail(){
      //send email
      const Myheaders = new HttpHeaders ({
        "content-Type": " application/json"
      });
      const options = { headers : Myheaders };
      var data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        content: this.content
      }
      this.apicaller.post('http://localhost:3000/sendemail',JSON.stringify(data), options )
      .subscribe(()=>{
        console.log('check you inbox, we sent an email')
      })
    }



  ngOnInit(): void {
  }

}
