import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Library[];
  constructor(private libraryService : LibraryService, private router : Router) { }

  ngOnInit(): void {
    this.libraryService.getDataFromRestApi().subscribe(data =>{
      this.books = data;
    })
  }
  viewBookDetails(id: number){
    this.router.navigate(['view-book', id]);
  }

}
