import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:9000/hospital/appointments"

  private getUrl="http://localhost:9000/hospital/appointments/getAppointments"

  private postUrl="http://localhost:9000/hospital/appointments/addAppointment"

  private deleteUrl="http://localhost:9000/hospital/appointments/deleteAppointment/{id}"

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.getUrl}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.postUrl}`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.deleteUrl.replace('{id}',id.toString())}`);
  }
}
