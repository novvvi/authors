import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/api/authors')
  }

  deleteAuthor(id) {
    return this._http.delete(`/api/authors/${id}`)
  }

  postAuthor(data) {
    return this._http.post('/api/authors', data);
  }

  updateAuthor(data,id) {
    return this._http.put(`/api/authors/edit/${id}`, data)
  }
}
