import "./style.scss";

type PostType = {
  userId: number;
  title: string;
  body: string;
};

type PostProsps = {
  post: PostType;
};

export default function index({ post }: PostProsps) {
  return (
    <div className="post__card">
      <h2>Posts</h2>
      <h3> {post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
}
