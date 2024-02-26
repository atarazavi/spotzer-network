import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { SidenavModule } from '#shared/components/sidenav/sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    SidenavModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
