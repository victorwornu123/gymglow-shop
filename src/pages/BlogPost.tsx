import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/blog/Header";
import { Sidebar } from "@/components/blog/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-y">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-line leading-relaxed">
                {post.content}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 DevBlog. Built with passion for sharing knowledge.</p>
        </div>
      </footer>
    </div>
  );
}
