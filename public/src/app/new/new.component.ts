import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author: object;
  errors: any[];

  constructor(private _hs: HttpService, private _r: Router) { }

  ngOnInit() {
    this.author = {name: ""}
    this.errors = [];
  }

  addAuthor() {
    let obs = this._hs.postAuthor(this.author);
    obs.subscribe(data => {
      if (data['msg'] == 'sucess') {
        this._r.navigate(['/']);
      }
      else {
        this.errors.push(data['data']['errors']['name']['message'])
      }
    })
  }
}
