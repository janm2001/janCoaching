import Blog from "@/components/Blog/Blog";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
    const resolvedParams = await params;
    const postId = resolvedParams.id;
  return <Blog id={postId} />;
}