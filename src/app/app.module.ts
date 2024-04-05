import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { AdloginComponent } from './adlogin/adlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DoctorDashboardComponent,
    CreatePatientComponent,
    MedicineComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DocloginComponent,
    ViewMedicineComponent,
    AdloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
