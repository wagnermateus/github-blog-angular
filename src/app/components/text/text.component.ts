import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() text: string = '';
  htmlContent: SafeHtml = '';
}
