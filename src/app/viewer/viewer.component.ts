import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.sass']
})
export class ViewerComponent implements OnInit {

  @Input('json') jsonObj = {};
  @Input('title') title = '';

  constructor() { }

  ngOnInit() {
  }

}
