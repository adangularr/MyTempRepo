import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonDonutChartComponent } from './components/common-donut-chart/common-donut-chart.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonDonutChartComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
