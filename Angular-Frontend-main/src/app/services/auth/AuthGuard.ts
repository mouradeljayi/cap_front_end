import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthAuthGuard implements CanActivate {
  
    constructor(private authService: AuthService, private router: Router) { }
  
    canActivate(): boolean {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
  }
  