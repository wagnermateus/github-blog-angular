import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MarkdownContentComponent } from '../markdown-content/markdown-content.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TitleComponent, MarkdownContentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() title: string = '';
  @Input() date!: Date;
  @Input() text: string = '';

  getDate() {
    return formatDistanceToNow(this.date, { addSuffix: true, locale: ptBR });
  }
}
