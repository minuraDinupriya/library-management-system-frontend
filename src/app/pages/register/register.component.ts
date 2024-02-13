import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  private http;
  public countryList:any;

  constructor(httpClient:HttpClient) {
    this.http=httpClient
  }

  ngOnInit(): void {
   this.loadCountries(); 
  }

  loadCountries(){
    let api="https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe(res =>{
      this.countryList=res;
      console.log(res);
    })
  }
}
