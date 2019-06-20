import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: object;
  errors: any[];
  id: any;
  error: any;

  constructor(private _hs: HttpService, private _r: Router, private _ar: ActivatedRoute) { }

  ngOnInit() {
    this._ar.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    this.author = {name: ""};
    this.errors = [];
  }

  editAuthor() {
    let obs = this._hs.updateAuthor(this.author, this.id);
    obs.subscribe(data=> {
      if (data['msg'] == 'sucess') {
        this._r.navigate(['/']);
      }
      else {
        this.errors.push(data['data']['errors']["name"]['message'])
      }
    })
  }
}
