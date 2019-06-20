import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: object;


  constructor(private _hs : HttpService) { }

  ngOnInit() {
    this.allAuthors();
  }

  allAuthors() {
    let obs = this._hs.getAuthors();
    obs.subscribe(data => {
      this.authors = data;
    })
  }

  delete(id) {
    let obs = this._hs.deleteAuthor(id);
    obs.subscribe(data => {
      console.log(data);
    })
  }
}
