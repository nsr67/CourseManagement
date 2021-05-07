import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { courses } from 'src/app/model/data';
import { location } from 'src/app/model/data';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  ngOnInit(): void {
  }
  courses: any[];
  location: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Courses';
  showYAxisLabel = true;
  yAxisLabel = 'No of locations';

  colorScheme = {
    domain: ['#bccbeb', '#f2d061', '#333436', '#6172f2', '#f27261']
  };

  constructor() {
    Object.assign(this, { courses }),
    Object.assign(this, { location})
  }
  
  //Pie-chart

  // options
  gradients: boolean = true;
  showlegend: boolean = true;
  showlabels: boolean = false;
  isdoughnut: boolean = false;
  legendposition: string = 'below';

  colorscheme = {
    domain: ['#bccbeb', '#f2d061', '#333436', '#6172f2', '#f27261']
  };

}