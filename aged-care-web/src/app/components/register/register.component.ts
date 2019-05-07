import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/domain/user';
import { Account } from 'src/app/domain/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  confirmPWD: string = "";
  submitted = false;
  registerForm: FormGroup;
  passwordMatchError = false;
  adminRegistration = false;

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    if (this.router.url.indexOf('admin') > -1) {
      this.adminRegistration = true;
    }
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      bDate: [''],
      username: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPwd: ['', [Validators.required, Validators.minLength(6)]]
    });
    let account: Account = new Account();
    this.user.account = account;
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      let confirmPWD = this.registerForm.value['confirmPwd'];
      this.user.lastName = this.registerForm.value['lastName'];
      this.user.firstName = this.registerForm.value['firstName'];
      this.user.email = this.registerForm.value['email'];
      this.user.bDate = this.registerForm.value['bDate'];
      this.user.account.username = this.registerForm.value['username'];
      this.user.account.password = this.registerForm.value['password'];
      if (this.user.account.password == confirmPWD) {
        this.userService.registerUser(this.user, this.adminRegistration).subscribe((result: any) => {
          this.toastr.success("Registration success");
          this.router.navigate(['/login']);
        }, error => {
          if (error.error && error.error.message)
            this.toastr.error(error.error.message);
          else
            this.toastr.error("Registration error");
        })
      } else {
        this.toastr.error("Password and confirmation should match");
      }
    }
  }
}