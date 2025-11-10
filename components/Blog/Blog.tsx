"use client";

import { useEffect, useState } from "react";
import { BlogPost } from "./Blogs";
import Container from "../Container/Container";
import { ArrowLeft, Link } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface BlogProps {
  id: string;
}
const Blog = ({ id }: BlogProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  useEffect(() => {
    const getPost = () => {
      const storedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      const post = storedPosts.find((p: { id: string }) => p.id === id);
      setPost(post);
    };
    getPost();
  }, [id]);
  return (
    <Container>
      {post ? (
        <div>
            <Button onClick={() => window.location.href = "/blog"} className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" />
              Back to Blogs
            </Button>

          <Badge className="my-4">{post.category}</Badge>
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <p className="text-lg leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Blog;
