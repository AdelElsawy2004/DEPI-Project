import { Routes } from '@angular/router';
import { Login } from './Login/login.component';
import { Error } from './error/error.component';
import { Access } from './access/access.component';
import { RegisterComponent } from './register/register.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login },
    { path: 'register', component: RegisterComponent }
] as Routes;
