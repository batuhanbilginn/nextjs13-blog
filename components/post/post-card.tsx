import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
      {/* Post Image */}
      <Image alt={post.title} src={post.image} width={600} height={300} />
      {/* Post Content */}
      <div>{post.title}</div>
    </Link>
  );
};

export default PostCard;
