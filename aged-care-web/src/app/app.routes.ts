import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactAdminComponent } from './components/contact-admin/contact-admin.component';
import { ContactDoctorComponent } from './components/contact-doctor/contact-doctor.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NurseVisitingComponent } from './components/nurse-visiting/nurse-visiting.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { VisitRecordsComponent } from './components/visit-records/visit-records.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'appointments', component: AppointmentsComponent, canActivate: [AuthGuard] },
	{ path: 'bookappointment', component: BookAppointmentComponent, canActivate: [AuthGuard] },
	{ path: 'records', component: VisitRecordsComponent, canActivate: [AuthGuard] },
	{ path: 'register', component: RegisterComponent },
	{ path: 'register/admin', component: RegisterComponent },
	{ path: 'contact-admin', component: ContactAdminComponent, canActivate: [AuthGuard] },
	{ path: 'contact-doctor', component: ContactDoctorComponent, canActivate: [AuthGuard] },
	{ path: 'nurse-visiting', component: NurseVisitingComponent, canActivate: [AuthGuard] },
	{ path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
	{ path: '**', component: HomeComponent, canActivate: [AuthGuard] }
]