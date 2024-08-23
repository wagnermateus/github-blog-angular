import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.scss',
})
export class InfoItemComponent {
  @Input() info: string = '';
}
