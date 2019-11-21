import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.styl']
})
export class AuTabComponent implements OnInit {

  @Input() title: string;
  @Input() selected: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
