import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-table-link',
  template: '<a [routerLink]="id">Info</a>',
  styleUrls: ['./table-link.component.scss']
})
export class TableLinkComponent implements OnInit {

  id: string;

  @Input() value: string;
  @Input() rowData: { id: string };
  constructor() { }

  ngOnInit(): void {
    this.id = this.rowData.id
  }

}
