import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }

  signUp() {
    this.router.navigate(['sign-up']) 
    console.log("sign-up");
    
  }
  logIn() {
    this.router.navigate(['login']) 
    console.log("login");
  }
  

}
