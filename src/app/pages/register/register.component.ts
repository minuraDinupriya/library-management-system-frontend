import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private http;
  public countryList: any;
  public selectedCountry: any;
  public isBorrowerExists: any;
  public borrower = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    address: null,
    address2: null,
    country: null,
    contactNumber: null,
  };

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    let api = 'https://restcountries.com/v3.1/all';
    this.http.get(api).subscribe((res) => {
      this.countryList = res;
      console.log(res);
    });
  }
  setSelectedCountry(country: any) {
    this.selectedCountry = country;
    console.log(country);
  }

    async submitForm() {
      console.log(this.borrower);
      await this.isExistingBorrower();
      console.log(4444444);
      console.log(this.isBorrowerExists);
      if (this.isBorrowerExists) {
        console.log('!add api triggerd');
        Swal.fire({
          title: 'Can not register!!',
          text: `Borrower ${this.borrower.userName} already exists.Try using another username`,
        });
      } else {
        console.log('add api triggerd');
        this.http.post('http://localhost:8080/add', this.borrower).subscribe(
          (response) => {
            console.log('Borrower added successfully', response);
            
            Swal.fire({
              title: 'User Registered Successfully',
              text: `Welcome ${this.borrower.userName}`,
            });
            // Clear the form after successful submission
            this.borrower = {
              firstName: null,
              lastName: null,
              userName: null,
              email: null,
              address: null,
              address2: null,
              country: null,
              contactNumber: null,
            };

          },
          (error) => {
            console.error('Error adding borrower', error);
          }
        );
      }
    }

    async isExistingBorrower() {
      console.log(this.borrower.userName);
      console.log(77777777);
      try {
        const response = await this.http
          .get(`http://localhost:8080/is-existing-user/${this.borrower.userName}`)
          .toPromise();
        console.log(99999999);
        console.log(response);
        this.isBorrowerExists = response;
      } catch (error) {
        console.error('Error checking borrower', error);
      }
    }
}
