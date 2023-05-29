import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userData: User | null = null;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
   this.getUserData()
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  getUserData(): void {
    this.authService.getUserData()
      .subscribe(
        (user: User) => {
          this.userData = user;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }

  onLogout() :void {
    this.authService.logout()
    location.reload()
  }
  

}
