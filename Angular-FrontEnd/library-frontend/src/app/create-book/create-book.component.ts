import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
 library:Library = new Library();
  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  Submit(){
    this.libraryService.createNewBookRecord(this.library).subscribe(data => {
      console.log(data);
      this.router.navigate([""])
    },
    error => console.log(error));
  }

}
