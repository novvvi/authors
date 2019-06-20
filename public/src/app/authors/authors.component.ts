import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LikesService } from '../likes.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;
  likeStat: any[];
  authLength: number;
  likeList: any[];


  constructor(private _hs : HttpService, private _likes: LikesService) { }

  ngOnInit() {
    this.allAuthors();
    this.likeStat = [];
  }

  allAuthors() {
    let obs = this._hs.getAuthors();
    obs.subscribe(data => {
      this.authors = data;
      this.authLength = this.authors.length
      this.likeGen(this.authLength)
    })
  }

  delete(id) {
    let obs = this._hs.deleteAuthor(id);
    obs.subscribe(data => {
      console.log(data);
    })
  }

  likeGen(l){
    for (let i = 0; i < l; i++) {
      this._likes.addLike()
    }
    this.likeStat = this._likes.list;
    console.log(this.likeStat)
  }

  likeIt(i) {
    this._likes.list[i] = true;
    this.likeStat = this._likes.list
  }

  unlikeIt(i) {
    this._likes.list[i] = false;
    this.likeStat = this._likes.list
  }
}
