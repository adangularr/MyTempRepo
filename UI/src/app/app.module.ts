import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { CommonDonutChartComponent } from './components/common-donut-chart/common-donut-chart.component';
import { CommonLegendComponent } from './components/common-legend/common-legend.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CommonDonutChartComponent,
    CommonLegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
