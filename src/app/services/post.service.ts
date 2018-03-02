import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  query(): Observable<any> {
    return this.http.get(this.baseUrl + '/posts');
  }

  find(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/posts/' + id);
  }

  save(data: any): Observable<any> {
    return !data.id ? this.http.post(this.baseUrl + '/posts', data) : this.http.put(this.baseUrl + '/posts/' + data.id, data);
  }

  destroy(id: number): Observable<any> { //status 204
    return this.http.delete(this.baseUrl + '/posts/' + id);
  }

}
