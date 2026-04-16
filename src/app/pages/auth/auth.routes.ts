import { Routes } from '@angular/router';
import { Login } from './Login/login.component';
import { Error } from './error/error.component';
import { Access } from './access/access.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login }
] as Routes;
