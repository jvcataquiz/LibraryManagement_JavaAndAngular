import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from './library';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private urlOfRestApi = "http://localhost:8080/library/management/list";
  constructor(private httpClient: HttpClient) { }

  getDataFromRestApi():Observable<Library[]>{
    return this.httpClient.get<Library[]>(`${this.urlOfRestApi}`);
  }
  getBookDetails(id:number):Observable<Library>{
    return this.httpClient.get<Library>(`${this.urlOfRestApi}/${id}`)
  }
  createNewBookRecord(libray: Library):Observable<Object>{
    return this.httpClient.post(`${this.urlOfRestApi}`, libray);
  }
  deleteBookByID(id: number):Observable<Object>{
  return this.httpClient.delete(`${this.urlOfRestApi}/${id}`)
  }

}
