import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'el-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
