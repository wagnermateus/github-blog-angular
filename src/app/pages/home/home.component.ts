import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { Post } from '../../../interfaces/post.interface';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileCardComponent, SearchInputComponent, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  totalPosts: number = 0;
  homepageDataIsLoading: boolean = true;
  searchTerm: string = '';

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement?.value || '';

    this.getPosts();
  }

  getPosts() {
    this.homepageDataIsLoading = true;
    this.postService.fetchPosts(this.searchTerm).subscribe({
      next: (data) => {
        this.posts = data.items;
        this.totalPosts = data.total_count;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  handleViewPost(postNumber: number) {
    this.router.navigate(['/post', postNumber]);
  }
}
