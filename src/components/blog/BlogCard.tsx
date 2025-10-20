import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/post/${post.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elevated)] h-full">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
