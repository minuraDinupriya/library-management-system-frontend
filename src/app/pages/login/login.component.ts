import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http:HttpClient,private router:Router){

  }
  loginObj:any={
    "userName":"",
    "password":""
  }

  logIn(){
    this.http.post("http://localhost:8080/validate-login",this.loginObj).subscribe((respone:any)=>{
      console.log(respone)
      if(respone){
        this.router.navigate(['app-view-borrowers'])
      }else{
        alert("you can not login!!")
      }
    })
  }
}
