import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private baseUrl = '/api/indexes';

  constructor(private http: HttpClient) { }

  createIndex(indexData: any): Observable<any> {
    return this.http.post(this.baseUrl, indexData);
  }
}
