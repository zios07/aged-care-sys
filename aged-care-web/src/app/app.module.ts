import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ContactAdminComponent } from './components/contact-admin/contact-admin.component';
import { ContactDoctorComponent } from './components/contact-doctor/contact-doctor.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NurseVisitingComponent } from './components/nurse-visiting/nurse-visiting.component';
import { PatientEditComponent } from './components/patient/patient-edit/patient-edit.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitRecordsComponent } from './components/visit-records/visit-records.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ContactAdminComponent,
    ContactDoctorComponent,
    MessagesComponent,
    NurseVisitingComponent,
    AppointmentsComponent,
    BookAppointmentComponent,
    VisitRecordsComponent,
    PatientListComponent,
    PatientEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [
    CdkColumnDef,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
