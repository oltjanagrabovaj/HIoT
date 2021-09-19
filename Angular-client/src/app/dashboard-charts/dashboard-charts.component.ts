import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit {
  view:any[]=[700,300];
  colorScheme = {
    domain:['#141d66','#314ccf', '#5e7bab', '#00d4ff', '#3b475d']
  };
  schemeType: string = 'ordinal'; //ordinal or linear
  gradient:boolean = true;
  xAxis: boolean = true;
  yAxis:boolean = true;
  legendTitle:string = 'Months';
  legendPosition:string = 'below'; // right or below
  legend:boolean = true;
  showXAxisLabel :boolean = true;
  showYAxisLabel:boolean = true;
  yAxisLabel:boolean = true;
  xAxisLabel:boolean = true;
  animations:boolean = true;
  showGridLines:boolean = true;
  showDataLabel:boolean = true;
  barPadding:number = 5;
  tooltipDisabled:boolean = false;
  roundEdges:boolean = false;

  showLabels:boolean = true;
  value: number = 80;
  previousValue:number = 100;
  units:string = 'beats/minute';
  cardColor = '#D133FF';

  viewChl:any[]=[600,300]; 
  viewBmi:any[]=[700,400]; 


  produstSales = [] = [
    {
      'name':"book",
      'value': 1001
    },
    {
      'name':"graphic card",
      'value': 2882
    },
    {
      'name':"desk",
      'value': 2394
    },
    {
      'name':"laptop",
      'value': 9384
    },
    {
      'name':"monitor",
      'value': 8239
    }
  ];

  bloodPresure = [] = [
    {
      'name':"January '21",
      'value':90 
     
    },
    {
      'name':"April '21 ",
      'value':140
     
    },
    {
      'name':" May '21",
      'value':180
      
    },
    {
      'name':"March '21",
      
      'value':100
    },
    {
      'name':"February '21",
      'value': 190
    }
  ];

  cholesterolRate = [] = [
    {
      'name':"January '21",
      'value':100
     
    },
    {
      'name':"April '21 ",
      'value':90
     
    },
    {
      'name':" May '21",
      'value':160
      
    },
    {
      'name':"March '21",
      
      'value':180
    },
    {
      'name':"February '21",
      'value': 200
    }
  ];

  bodyMassIndex = [] = [
    {
      'name':"January '21",
      'value':118
     
    },
    {
      'name':"April '21 ",
      'value':120
     
    },
    {
      'name':" May '21",
      'value':90
      
    },
    {
      'name':"March '21",
      
      'value':121
    },  
    {
      'name':"February '21",
      'value': 98
    },
    {
      'name':"July '21",
      'value': 156
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
