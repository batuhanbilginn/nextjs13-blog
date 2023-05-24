import { Post } from "@/types/collection";
import PostCard from "./post-card";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}
const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
