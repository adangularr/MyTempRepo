import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLegendComponent } from './common-legend.component';

describe('CommonLegendComponent', () => {
  let component: CommonLegendComponent;
  let fixture: ComponentFixture<CommonLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLegendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
