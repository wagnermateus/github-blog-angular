import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { catchError, of } from 'rxjs';
import { Issue } from '../../../interfaces/issue.interfac';
import { HttpClient } from '@angular/common/http';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileCardComponent, SearchInputComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  issues: Issue[] = [];
  totalPosts: number = 0;
  homepageDataIsLoading: boolean = true;
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchIssues();
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement?.value || '';

    this.fetchIssues();
  }

  fetchIssues(): void {
    this.homepageDataIsLoading = true;
    this.http
      .get(
        `https://api.github.com/search/issues?q=${encodeURIComponent(
          'repo:wagnermateus/github-blog ' + this.searchTerm
        )}`
      )
      .pipe(
        catchError((error) => {
          console.error('Erro ao buscar issues', error);
          this.homepageDataIsLoading = false;
          return of({ items: [], total_count: 0 }); // Return an empty result in case of error
        })
      )
      .subscribe({
        next: (response: any) => {
          this.issues = response.items as Issue[];
          this.totalPosts = response.total_count;
          this.homepageDataIsLoading = false;
        },
        error: (error) => {
          console.error('Erro ao buscar issues', error);
          this.homepageDataIsLoading = false;
        },
      });
  }
}
