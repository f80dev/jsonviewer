import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  jsonObj = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;

    const file: string = params.get('file') || params.get('url');
    if (file != null) {
      fetch(file).then((r) => {
        r.json().then((jsonResponse) => {
          this.jsonObj = jsonResponse;
        });
      });
    }
  }

}
