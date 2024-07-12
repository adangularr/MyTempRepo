import { Component, Input } from '@angular/core';
import { LegendItem } from '../../shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-legend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-legend.component.html',
  styleUrl: './common-legend.component.css'
})
export class CommonLegendComponent {
  @Input() legendTitle: string = '';
  @Input() legendItems: LegendItem[] = [];
}
