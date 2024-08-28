import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { InfoItemComponent } from '../../components/info-item/info-item.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../../interfaces/post.interface';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Router, ActivatedRoute } from '@angular/router';
import { MarkdownContentComponent } from '../../components/markdown-content/markdown-content.component';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TitleComponent, InfoItemComponent, MarkdownContentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post: Post | undefined;
  postNumber!: string;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postNumber = params.get('id')!;
    });

    this.getPost();
  }

  getPost() {
    this.postService.fetchPost(this.postNumber).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (err) => {
        console.error('There was an error!', err);
      },
    });
  }

  getDate() {
    return formatDistanceToNow(this.post!.created_at, {
      addSuffix: true,
      locale: ptBR,
    });
  }

  goBack(): void {
    this.router.navigate(['../']);
  }
}
