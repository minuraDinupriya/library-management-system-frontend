import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-borrowers',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-borrowers.component.html',
  styleUrl: './view-borrowers.component.css'
})
export class ViewBorrowersComponent implements OnInit {

  private http;
  public borrowerList: any = {};
  public selectedBorrower: any;

  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }

  ngOnInit(): void {
    this.loadBorrowers();
  }

  loadBorrowers() {
    this.http.get('http://localhost:8080/borrowers').subscribe((data) => {
      this.borrowerList = data;
      console.log(this.borrowerList);
    });
  }

  deleteBorrower() {
    console.log(this.selectedBorrower.id)
    let api = 'http://localhost:8080/' + this.selectedBorrower.bid;
    this.http
      .delete(api, { responseType: 'text' })
      .subscribe((responce: string) => {
        console.log(responce);
        this.loadBorrowers();
        Swal.fire({
          title: "Good job!",
          text: `${this.selectedBorrower.name} is deleted` ,
          icon: "success"
        });
        this.selectedBorrower = null;
        
      });
  }

  setSelectedBorrower(borrower: any) {
    this.selectedBorrower = borrower;
    console.log('Set Selected Book' + borrower.name);
  }

  saveBorrower(){
    let postApi="http://localhost:8080/add";
    this.http.post(postApi, this.selectedBorrower).subscribe(()=>{
      console.log("saved")
      this.loadBorrowers();
      Swal.fire({
        title: "Good job!",
        text: `borrower with id ${this.selectedBorrower.id} is updated` ,
        icon: "success"
      });
      this.selectedBorrower={};
    })
  }
}
