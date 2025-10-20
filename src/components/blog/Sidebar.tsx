import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/post/${post.id}`}
              className="block group"
            >
              <div className="flex gap-3">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-20 h-20 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest posts delivered right to your inbox
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm rounded-md border bg-background"
            />
            <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
