import { useState, useMemo } from "react";
import { Header } from "@/components/blog/Header";
import { Hero } from "@/components/blog/Hero";
import { BlogCard } from "@/components/blog/BlogCard";
import { Sidebar } from "@/components/blog/Sidebar";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                {selectedCategory === "All" ? "Latest Posts" : selectedCategory}
              </h2>
              <p className="text-muted-foreground mt-2">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="border-t mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 DevBlog. Built with passion for sharing knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
