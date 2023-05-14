import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { ChartData,ChartType, ChartOptions } from 'chart.js';
import { NgChartsModule} from "ng2-charts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent{
  constructor() { }
  salesData: ChartData<'pie'> = {
    // labels: ['stocks', 'Mutual funds', 'commodities', 'cash'],
    datasets: [
      {
        label:"Stocks",
        data: [60],
        backgroundColor: [
          '#223F80',
        ],
        hoverOffset: 4
      },
      {
        label:"Mutual funds",
        data: [10],
        backgroundColor: [
          '#406AC8',
        ],
        hoverOffset: 4
      },
      {
        label:"Commodities",
        data: [15],
        backgroundColor: [
          '#6F82AB',
        ],
        hoverOffset: 4
      },
      {
        label:"Cash",
        data: [15],
        backgroundColor: [
          '#CADAFF',
        ],
        hoverOffset: 4
      }
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
  };
}

