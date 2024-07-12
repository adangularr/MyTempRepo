import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { myCustomColors } from '../../shared/color-schemes';
import { LegendItem, SegmentItemSet, SegmentValues } from '../../shared/models';
import { createCompleteSegmentItemSet } from '../../shared/object-helpers';
import { roundToWithPercentage } from '../../shared/number-helpers';
import { CommonLegendComponent } from '../common-legend/common-legend.component';

@Component({
  selector: 'app-common-donut-chart',
  standalone: true,
  imports: [CommonLegendComponent],
  templateUrl: './common-donut-chart.component.html',
  styleUrl: './common-donut-chart.component.css'
})
export class CommonDonutChartComponent implements OnInit {

  readonly Highcharts: typeof Highcharts = Highcharts;
  private readonly customColors: string[] = myCustomColors();
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Overall Score'
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
  legendItems: LegendItem[] = [];

  ngOnInit(): void {
    this.handleData();
    this.createChart();
    this.createLegendItems();
  }

  private createLegendItems(): void {
    this.legendItems = [{
      color: this.customColors[0],
      text: '1 - 8'
    }, {
      color: this.customColors[1],
      text: '9 - 19'
    }, {
      color: this.customColors[2],
      text: '20 - 32'
    }, {
      color: this.customColors[3],
      text: '33 - 45'
    }, {
      color: '#D3D3D3',
      text: '46 - 58'
    }, {
      color: '#FFEFD5',
      text: '59 - 71'
    }, {
      color: this.customColors[4],
      text: '72 - 84'
    }, {
      color: this.customColors[5],
      text: '85 - 97'
    }, {
      color: this.customColors[6],
      text: '98 - 107'
    }, {
      color: this.customColors[7],
      text: '108 - 116'
    }];
  }

  private handleData(): void {
    this.chartOptions.colors = this.customColors;
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
