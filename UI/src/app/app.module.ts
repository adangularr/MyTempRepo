import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { CommonDonutChartComponent } from './components/common-donut-chart/common-donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonDonutChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
