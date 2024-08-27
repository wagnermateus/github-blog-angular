import { Post } from './post.interfac';

export interface GetPostsHttpResponse {
  total_count: number;
  items: Post[];
}
