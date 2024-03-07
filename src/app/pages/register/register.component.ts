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
  public selectedCountry:any;
  public borrower={
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    address: null,
    address2: null,
    country: null,
    contactNumber: null
}

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
  setSelectedCountry(country:any){
    this.selectedCountry=country;
    console.log(country)
  }

  submitForm() {
    console.log(this.borrower)
    this.http.post('http://localhost:8080/add', this.borrower)
      .subscribe(response => {
        console.log('Borrower added successfully', response);
        // Clear the form after successful submission
        this.borrower = {
          firstName: null,
          lastName: null,
          userName: null,
          email: null,
          address: null,
          address2: null,
          country: null,
          contactNumber: null
        };
      }, error => {
        console.error('Error adding borrower', error);
      });
  }
}
