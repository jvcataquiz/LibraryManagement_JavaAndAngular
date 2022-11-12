import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';


@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent implements OnInit {

  id!:number;
  library!: Library;
  constructor(private libraryService: LibraryService, private getId: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.getId.snapshot.params['id'];
    this.libraryService.getBookDetails(this.id).subscribe(data =>{
      this.library = data;
    })
  }

  deleteBook(id: number){
    this.libraryService.deleteBookByID(id).subscribe(data =>{
      this.router.navigate([" "])
    })
  }
}
