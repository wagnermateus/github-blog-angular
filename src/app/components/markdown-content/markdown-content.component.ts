import { Component, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from '../../services/markdown.service';

@Component({
  selector: 'app-markdown-content',
  standalone: true,
  imports: [],
  templateUrl: './markdown-content.component.html',
  styleUrl: './markdown-content.component.scss',
})
export class MarkdownContentComponent {
  @Input() markdownContent: string = '';
  sanitizedHtml: SafeHtml = '';

  constructor(
    private markdownService: MarkdownService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges() {
    const html = this.markdownService.convertToHTML(this.markdownContent);
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
