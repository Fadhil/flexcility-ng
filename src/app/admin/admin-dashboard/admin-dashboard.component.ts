import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';


  public doughnutChartLabels2: string[] = ['Download ', 'In-Store', 'Mail-Order'];
  public doughnutChartData2: number[] = [350, 450, 100];
  public doughnutChartType2 = 'doughnut';
}
