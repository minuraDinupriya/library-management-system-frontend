import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-view-borrowings',
    standalone: true,
    templateUrl: './view-borrowings.component.html',
    styleUrl: './view-borrowings.component.css',
    imports: [NavComponent,HttpClientModule,NgFor]
})
export class ViewBorrowingsComponent implements OnInit{
    constructor(private http:HttpClient){

    }

    transactionList:any=[];

    ngOnInit(): void {
        this.http.get("http://localhost:8082/book-transactions")
        .subscribe((response:any)=>{
            this.transactionList=response;
            console.log(response)
        })
    }

    


}
