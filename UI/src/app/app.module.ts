import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { CommonDonutChartComponent } from './common-donut-chart/common-donut-chart.component';
import { IgxItemLegendModule, IgxDoughnutChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    CommonDonutChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxItemLegendModule,
    IgxDoughnutChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
