import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewBorrowersComponent } from './pages/view-borrowers/view-borrowers.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"view-all-books",
        component:ViewAllBooksComponent
    },
    {
        path:"app-view-borrowers",
        component:ViewBorrowersComponent
    },
    {
        path:"sign-up",
        component:RegisterComponent
    },
    {
        path:"",
        redirectTo:"sign-up",
        pathMatch:"full"
    }
];
