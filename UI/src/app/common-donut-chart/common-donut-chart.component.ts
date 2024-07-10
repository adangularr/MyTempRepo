import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-common-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './common-donut-chart.component.html',
  styleUrl: './common-donut-chart.component.css'
})
export class CommonDonutChartComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: ['#FF00FF', '#373737','Green','Yellow','Orange', '#00F1F3'],
	      datasets: [{
        label: 'My First Dataset',
        data: [300, 240, 100, 432, 253, 34],
        backgroundColor: [
          '#FF00FF',
          '#373737',
          'green',
			    'yellow',
          'orange',
          '#00F1F3',			
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
