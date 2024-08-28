import { Post } from './post.interface';

export interface GetPostsHttpResponse {
  total_count: number;
  items: Post[];
}
