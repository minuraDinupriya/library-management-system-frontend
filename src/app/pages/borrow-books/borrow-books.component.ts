import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow-books',
  standalone: true,
  templateUrl: './borrow-books.component.html',
  styleUrl: './borrow-books.component.css',
  imports: [FormsModule, NavComponent, HttpClientModule, CommonModule],
})
export class BorrowBooksComponent {
  constructor(private http: HttpClient) {}

  bookIds:any=[];
  

  // public bookIds:any=[];

  borrowerName: any;
  searchedBorrower: any;
  bookId: any;
  // searchedBook: any;
  addedBookList: any = [];

  searchBorrower() {
    // Make an HTTP GET request to search for the borrower by name
    this.http
      .get(`http://localhost:8080/find-by-username/${this.borrowerName}`)
      .subscribe(
        (response: any) => {
          // Assign the response to the searchedBorrower variable

          this.searchedBorrower = response;
          // this.transactionDetails.borrowerId = this.searchedBorrower.bid;
          console.log(this.searchedBorrower);
        },
        (error: any) => {
          console.error('Error searching for borrower:', error);
          // Handle error, e.g., display an alert
        }
      );
  }

  searchBookById() {
    this.http
      .get<any>(`http://localhost:8081/book/search/${this.bookId}`)
      .subscribe(
        (response: any) => {
          // Assign the response to the searchedBook variable
          console.log(response);
          Swal.fire({
            title: 'Do you want to lend this book?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.addedBookList.push(response);
              this.bookIds.push(response.id);
              console.log(this.addedBookList);

              Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info');
            }
          });
        },
        (error: any) => {
          console.error('Error searching for book:', error);
          // Handle error, e.g., display an alert
        }
      );
  }

  lendBooks() {
    
    const transactionDetails: any = {
      id: null,
      borrowerId: this.searchedBorrower.bid,
      bookIds:this.bookIds,
      date: new Date(),
      fine: 0.0,
    };

    console.log(transactionDetails);
    

    this.http
      .post(`http://localhost:8082/book-transactions`,transactionDetails)
      .subscribe(
        (response: any) => {
          // Assign the response to the searchedBorrower variable

          console.log(response);
        },
        (error: any) => {
          console.error('Error searching for borrower:', error);
          // Handle error, e.g., display an alert
        }
      );
  }
}
