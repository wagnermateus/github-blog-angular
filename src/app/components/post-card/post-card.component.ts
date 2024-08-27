import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MarkdownContentComponent } from '../markdown-content/markdown-content.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [TitleComponent, MarkdownContentComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input() title: string = '';
  @Input() date!: Date;
  @Input() text: string = '';

  getDate() {
    return formatDistanceToNow(this.date, { addSuffix: true, locale: ptBR });
  }
}
