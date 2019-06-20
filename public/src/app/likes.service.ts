import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor() { }

  list = [];

  addLike() {
    this.list.push(false)
  }
}
