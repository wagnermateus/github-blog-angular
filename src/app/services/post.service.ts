import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPostsHttpResponse } from '../../interfaces/get-posts-http-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts(searchTerm: string): Observable<GetPostsHttpResponse> {
    const endpointUrl = `https://api.github.com/search/issues? 
    )}`;

    return this.http.get<GetPostsHttpResponse>(endpointUrl, {
      params: {
        q: `repo:wagnermateus/github-blog ${searchTerm}`,
      },
    });
  }
}
