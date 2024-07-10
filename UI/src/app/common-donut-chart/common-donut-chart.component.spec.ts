import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDonutChartComponent } from './common-donut-chart.component';

describe('CommonDonutChartComponent', () => {
  let component: CommonDonutChartComponent;
  let fixture: ComponentFixture<CommonDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonDonutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
