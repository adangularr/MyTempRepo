import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { myCustomColors } from '../../shared/color-schemes';
import { SegmentItemSet, SegmentValues } from '../../models';
import { createCompleteSegmentItemSet } from '../../shared/object-helpers';
import { roundToWithPercentage } from '../../shared/number-helpers';

@Component({
  selector: 'app-common-donut-chart',
  standalone: true,
  imports: [],
  templateUrl: './common-donut-chart.component.html',
  styleUrl: './common-donut-chart.component.css'
})
export class CommonDonutChartComponent implements OnInit {

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Over Score'
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        depth: 45
      }
    },
    series: [{
      type: 'pie',
      name: 'Market share'
    }]
  };
  @Input() segmentValueData: SegmentValues[] = [{
    name: 'Efficiency',
    score: 6.45,
    portion: 10
  }, {
    name: 'Safety',
    score: 12.11,
    portion: 25
  }, {
    name: 'Effectiveness',
    score: 6.97,
    portion: 20
  }, {
    name: 'Patient Centeredness',
    score: 10.29,
    portion: 15
  }, {
    name: 'Equity',
    score: 4.73,
    portion: 5
  }, {
    name: 'Mortality',
    score: 14.4,
    portion: 25
  }];

  ngOnInit(): void {
    this.handleData();
    this.createChart();
  }

  private handleData(): void {
    this.chartOptions.colors = myCustomColors();
    const segmentData: SegmentItemSet = createCompleteSegmentItemSet(this.segmentValueData);
    if (this.chartOptions.series && this.chartOptions.series.length > 0) {
      // @ts-ignore
      this.chartOptions.series[0].data = segmentData.segmentValues
      .map(sI => [`${sI.name}  ${roundToWithPercentage(sI.score)} of ${roundToWithPercentage(sI.portion)}`, sI.portion]);
    }
    if (this.chartOptions.title) {
      this.chartOptions.title.text = `Overall Score ${roundToWithPercentage(segmentData.total)}`
    }
  }

  private createChart(): void {
    Highcharts.chart('container', this.chartOptions);
  }
}
