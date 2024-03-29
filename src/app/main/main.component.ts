import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  jsonObj = {};
  waiting = false;
  title = '';
  obj: any = {};

  constructor(private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;

    const file: string = params.get('file') || params.get('url');
    this.title = params.get('title') || '';

    if (file != null) {
      this.waiting = true;
      fetch(file).then((r) => {
        this.waiting = false;
        r.json().then((jsonResponse) => {
          this.jsonObj = jsonResponse;
        });
      });
    }
  }

  valide() {
    this.jsonObj = this.obj;
  }
}
