import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { BlogPost } from "./Blogs";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="p-4">
        <h6 className="text-lg color-gray-800">
          <Badge>{post.category}</Badge> {post.date}
        </h6>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600">{post.excerpt}</p>
        <p className="mt-5">By {post.author}</p>
      </Card>
    </Link>
  );
};

export default BlogCard;
