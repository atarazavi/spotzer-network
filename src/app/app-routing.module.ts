import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from '#features/home/home.component';
import { HistoryComponent } from '#features/history/history.component';
import { InvoiceComponent } from '#features/invoice/invoice.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'tasks-list',
    loadChildren: () => import('./features/tasks-list/tasks-list.module').then(m => m.TasksListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./features/history/history.module').then(m => m.HistoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'invoice', component: InvoiceComponent },
  // Redirect empty path to '/login' or another component as the default route
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
