"use client";

import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { seedBlogPosts } from "@/utils/seed-blog-posts";
import BlogCard from "./BlogCard";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getPosts = () => {
      seedBlogPosts();
      const storedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      setPosts(storedPosts);
    };

    getPosts();
  }, []);
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center mt-10">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {posts.length &&
          posts.map((post) => {
            return <BlogCard key={post.id} post={post} />;
          })}
      </div>
    </Container>
  );
};

export default Blogs;
