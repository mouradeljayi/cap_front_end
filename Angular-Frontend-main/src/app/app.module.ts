import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ArchiveComponent } from './archive/archive.component';
import { AddArchiveComponent } from './add-archive/add-archive.component';
import { FormationComponent } from './formation/formation.component';
import { ClubComponent } from './club/club.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    IndexComponent,
    FooterComponent,
    ArchiveComponent,
    AddArchiveComponent,
    FormationComponent,
    ClubComponent,
    AddFormationComponent,
    NotificationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
