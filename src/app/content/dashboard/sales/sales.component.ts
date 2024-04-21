import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as Chartist from 'chartist';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ChartEvent, ChartType } from 'ng-chartist';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartApiService } from '../../../_services/chart.api';
import { Router } from '@angular/router';
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @BlockUI('revenue') blockUIRevenue: NgBlockUI;
  @BlockUI('hitrate') blockUIHitRate: NgBlockUI;
  @BlockUI('email') blockUIEmail: NgBlockUI;

  public config: PerfectScrollbarConfigInterface = { suppressScrollY: true };
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  salesData: any;
  lineArea: any;
  earningchart: any;
  donutChart2: any;
  donutChart1: any;
  options = {
    bodyClass: ['pt-0'],
    close: false,
    expand: false,
    minimize: false,
    reload: true
  };

  hitRateOptions = {
    bodyClass: ['bg-hexagons', 'pt-0'],
    headerClass: ['bg-hexagons'],
    cardClass: ['pull-up'],
    close: false,
    expand: false,
    minimize: false,
    reload: true
  };

  dealsOptions = {
    bodyClass: ['bg-hexagons-danger'],
    cardClass: ['pull-up'],
    contentClass: ['bg-gradient-directional-danger']
  };

  emailsOptions = {
    bodyClass: ['pt-0'],
    close: false,
    expand: false,
    minimize: false,
    reload: true
  };
  loadingIndicator = true;

  firstRow = ['../../../assets/images/portrait/small/avatar-s-4.png',
    '../../../assets/images/portrait/small/avatar-s-5.png',
    '../../../assets/images/portrait/small/avatar-s-6.png'];
  secondRow = ['../../../assets/images/portrait/small/avatar-s-7.png',
    '../../../assets/images/portrait/small/avatar-s-8.png'];
  thirdRow = ['../../../assets/images/portrait/small/avatar-s-1.png',
    '../../../assets/images/portrait/small/avatar-s-2.png',
    '../../../assets/images/portrait/small/avatar-s-3.png'];
  fourthRow = ['../../../assets/images/portrait/small/avatar-s-11.png',
    '../../../assets/images/portrait/small/avatar-s-12.png'];
  fifthRow = ['../../../assets/images/portrait/small/avatar-s-6.png',
    '../../../assets/images/portrait/small/avatar-s-4.png'];
  rows = [
    {
      'type': 'danger', 'value': 85, 'product': 'iPhone X',
      'image': this.firstRow, 'buttonname': 'Mobile', 'amount': '$ 1200.00', 'bagde': '+8 more'
    },
    {
      'type': 'success', 'value': 75, 'product': 'iPad',
      'image': this.secondRow, 'buttonname': 'Teblet', 'amount': '$ 1190.00', 'bagde': '+5 more'
    },
    {
      'type': 'danger', 'value': 65, 'product': 'OnePlus',
      'image': this.thirdRow, 'buttonname': 'Mobile', 'amount': '$ 999.00', 'bagde': '+3 more'
    },
    {
      'type': 'success', 'value': 55, 'product': 'ZenPad',
      'image': this.fourthRow, 'buttonname': 'Teblet', 'amount': '$ 1150.00'
    },
    {
      'type': 'danger', 'value': 45, 'product': 'Pixel 2',
      'image': this.fifthRow, 'buttonname': 'Mobile', 'amount': '$ 1180.00'
    }
  ];

  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
  Daygraph = true;
  Weekgraph = false;
  Monthgraph = false;
  ngOnInit() { }
}
