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
}
