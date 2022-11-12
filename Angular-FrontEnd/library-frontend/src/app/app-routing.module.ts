import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';

const routes: Routes = [
  {path:'', component:BookListComponent},
  {path:'create-book', component:CreateBookComponent},
  {path:'view-book/:id', component:LibraryDetailsComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
