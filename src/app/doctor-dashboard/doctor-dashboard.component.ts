import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {
  patients:Patient[]=[];

  ngOnInit():void{
    this.getPatients();
  }

  constructor(private patientService:PatientService,private docauthService:DocauthService,private router:Router){}

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  updatePatient(id:number){
    this.router.navigate(['updatePatient',id])
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  viewPatient(id:number){
    this.router.navigate(['patient',id]);
  }

  logout(){
    this.docauthService.logout();
    this.router.navigate(['home'])
  }
}
