import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import {
  MatDatepickerModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatIconRegistry,
  MatProgressSpinnerModule,
  MatTab,
  MatTabsModule,
  MatTableModule,
  MatPaginator,
  MatPaginatorModule,
  MatDialogModule,
  MatGridListModule,
  MatRadioButton,
  MatRadioButtonBase,
  MatRadioModule,
  MatSortModule,
  MatSelectModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { ContactAdminComponent } from './components/contact-admin/contact-admin.component';
import { ContactDoctorComponent } from './components/contact-doctor/contact-doctor.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NurseVisitingComponent } from './components/nurse-visiting/nurse-visiting.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { VisitRecordsComponent } from './components/visit-records/visit-records.component';

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
    VisitRecordsComponent
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
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
