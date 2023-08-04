import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {GlobalService} from "../../global.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  standalone: true
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  loginForm: FormGroup ;

  constructor(private router: Router , private fb: FormBuilder, private globalService:GlobalService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  login() {
    console.log(this.loginForm.value)
    this.globalService.login(this.loginForm.value).subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      this.globalService.isLoggedIn.next(true)


    },error =>{
      alert('Invalid username or password!');
    })
  }
}
