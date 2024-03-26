import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
    selector: 'app-add-books',
    standalone: true,
    templateUrl: './add-books.component.html',
    styleUrl: './add-books.component.css',
    imports: [FormsModule, HttpClientModule, NavComponent]
})
export class AddBooksComponent {

  constructor(private http:HttpClient){

  }

  public book = {
    isbn: null,
    title: null,
    author: null,
    category: null,
    qty: null,
  };

  async submitForm() {
    try {
      // Perform any additional validation here

      // Send a request to add the book
      const response = await this.http.post('http://localhost:8081/book/add', this.book).toPromise();

      // Show success message
      Swal.fire({
        title: 'Book Added Successfully',
        icon: 'success'
      });
      console.log(this.book)

      // Clear the form
      this.book = {
        isbn: null,
        title: null,
        author: null,
        category: null,
        qty: null,
      };

      // Navigate to another page if needed
      // this.router.navigate(['home']); // Example navigation to home page
    } catch (error) {
      // Handle any errors
      console.error('Error adding book', error);

      // Show error message
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while adding the book',
        icon: 'error'
      });
    }
  }

}
