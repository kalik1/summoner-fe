import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-goto-instance',
  template: '<a [routerLink]="router_link">{{instanceName}}</a>',
  styleUrls: ['./goto-instance.component.scss'],
})
export class GotoInstanceComponent implements OnInit {

  instanceId: string;
  router_link: string;
  instanceName: string;
  @Input() value: string;
  @Input() rowData: { instance: { id: string, name: string } };

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.value);
    this.instanceId = this.rowData?.instance?.id;
    this.instanceName = this.rowData?.instance?.name;
    this.router_link = `../instances/${this.instanceId}`
  }

}
