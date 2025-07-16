import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Dados2Component } from './dados/dados2/dados2.component';


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},   
    {path: 'login', component: LoginComponent},
    {path: 'api2', component: Dados2Component},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]}





];
