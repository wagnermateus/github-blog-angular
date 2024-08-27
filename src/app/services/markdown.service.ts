import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  convertToHTML(markdown: string): string {
    return marked.parse(markdown).toString();
  }
}
