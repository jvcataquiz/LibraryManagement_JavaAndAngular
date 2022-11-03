import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Library[];
  constructor(private libraryService : LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getDataFromRestApi().subscribe(data =>{
      this.books = data;
    })
  }

}
