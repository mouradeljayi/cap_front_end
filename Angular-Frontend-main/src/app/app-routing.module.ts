import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { IndexComponent } from './index/index.component';
import { AddArchiveComponent } from './add-archive/add-archive.component';
import { FormationComponent } from './formation/formation.component';
import { ClubComponent } from './club/club.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthAuthGuard } from './services/auth/AuthGuard';




const routes: Routes = [{ path: 'app-login', component: LoginComponent, canActivate: [AuthAuthGuard]},
                        { path: 'app-header', component: HeaderComponent},
                        { path: 'app-home', component: HomeComponent},
                        { path: 'app-archive', component: ArchiveComponent},
                        { path: '', component: IndexComponent},
                        { path: 'app-add-archive', component: AddArchiveComponent},
                        { path: 'app-formation', component: FormationComponent},
                        { path: 'app-club', component: ClubComponent},
                        { path: 'app-add-formation', component: AddFormationComponent},
                        { path: 'app-profile', component: ProfileComponent},
                        { path: 'app-notif', component: NotificationsComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
