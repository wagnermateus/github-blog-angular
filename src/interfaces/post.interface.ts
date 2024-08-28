export interface Post {
  number: number;
  title: string;
  created_at: Date;
  body: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}
