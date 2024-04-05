import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { DoctorAuthGuardService } from './doctor-auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminDashboardComponent,canActivate:[AdminAuthGuardService]},
  {path:'appointmentList',component:AppointmentComponent,canActivate:[AdminAuthGuardService]},
  {path:'createAppointment',component:CreateAppointmentComponent,canActivate:[AdminAuthGuardService]},
  {path:'doctor',component:DoctorDashboardComponent,canActivate:[DoctorAuthGuardService]},
  {path:'createPatient',component:CreatePatientComponent,canActivate:[DoctorAuthGuardService]},
  {path:'medicine',component:MedicineComponent,canActivate:[DoctorAuthGuardService]},
  {path:'createMedicine',component:CreateMedicineComponent,canActivate:[DoctorAuthGuardService]},
  {path:'updatePatient/:id',component:UpdatePatientComponent,canActivate:[DoctorAuthGuardService]},
  {path:'patient/:id',component:ViewPatientComponent,canActivate:[DoctorAuthGuardService]},
  {path:'updateMedicine/:id',component:UpdateMedicineComponent,canActivate:[DoctorAuthGuardService]},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
