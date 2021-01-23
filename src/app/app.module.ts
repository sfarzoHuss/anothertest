import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    DoctorsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
   
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
