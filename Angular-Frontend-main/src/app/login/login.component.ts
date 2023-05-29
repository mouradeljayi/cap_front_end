import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  errorMessage = ""

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          const token = response.token;
          console.log(response)
          this.authService.setToken(token)
          location.reload()
        },
        (error) => {
          console.log('Error:', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
  }

  logout() {
    this.authService.logout();
  }

}
