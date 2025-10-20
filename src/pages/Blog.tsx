import { Header } from "@/components/blog/Header";
import { Hero } from "@/components/blog/Hero";
import { BlogCard } from "@/components/blog/BlogCard";
import { Sidebar } from "@/components/blog/Sidebar";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <footer className="border-t mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 DevBlog. Built with passion for sharing knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
