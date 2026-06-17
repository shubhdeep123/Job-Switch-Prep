import type { Post } from "../types/PostType";

interface PostProp {
  post: Post;
  onClick: () => void;
}

export function PostComponent({ post, onClick }: PostProp) {
  return (
    <div className="post-card" onClick={onClick}>
      <h1 className="post-title">{post.title}</h1>

      <p className="post-body">{post.body}</p>
    </div>
  );
}
