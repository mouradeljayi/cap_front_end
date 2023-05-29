import { Component, OnInit } from '@angular/core';
import { Club } from '../models/Club';
import { ClubService } from '../services/club/club.service';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{

  clubs: Club [] = [];
  userData: User | null = null;


  constructor(private clubService:ClubService, private authService:AuthService) {}

  ngOnInit(): void {
    this.allClubs();
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

  allClubs() {
    this.clubService.getAllClubs().subscribe(
      res => {
        this.clubs = res
      }, error => {
        console.log(error);
      }
    )
  }

  addUserToClub(clubId:number): void {
    this.clubService.addUserToClub(this.userData?.id, clubId)
      .subscribe(
        response => {
          console.log('User added to club successfully.');
        },
        error => {
          console.log('Error adding user to club:', error);
        }
      );
  }

}
