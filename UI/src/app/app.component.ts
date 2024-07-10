import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonDonutChartComponent } from './common-donut-chart/common-donut-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonDonutChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
