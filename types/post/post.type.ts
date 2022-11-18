export interface Post {
  title: string;
  content: string;
  summary: string;
}

export interface PostDetail extends Post {
  readonly id: number;
  status: "ACTIVE" | "BANNED";
  like__count: number;
  readonly reg__dt: string;
  readonly upd__dt: string;
  image: string;
}
