import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Redirect empty path to '/login' or another component as the default route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add a wildcard route for a 404 page or redirect to a specific page
  // { path: '**', component: PageNotFoundComponent } // Adjust as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
