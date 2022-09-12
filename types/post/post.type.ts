export interface Post {
  readonly id: number;
  title: string;
  content: string;
  status: "ACTIVE" | "BANNED";
  like__count: number;
  summary: string;
  image: string;
  readonly reg__dt: string;
  readonly upd__dt: string;
}

export interface PostCategory {
  title: string;
  count: number;
}
