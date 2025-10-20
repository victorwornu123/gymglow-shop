import { Header } from "@/components/blog/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About DevBlog</h1>
          <p className="text-xl text-muted-foreground">
            Sharing knowledge, one post at a time
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop"
            alt="About us"
            className="w-full rounded-lg mb-8"
          />

          <h2>Our Mission</h2>
          <p>
            DevBlog was created with a simple mission: to make development knowledge accessible, 
            practical, and engaging for everyone. Whether you're a beginner just starting out or 
            an experienced developer looking to stay current, our articles are crafted to provide 
            real value.
          </p>

          <h2>What We Write About</h2>
          <p>
            Our content covers a wide range of topics including:
          </p>
          <ul>
            <li>Modern web development frameworks and tools</li>
            <li>Best practices and design patterns</li>
            <li>Performance optimization techniques</li>
            <li>UI/UX design principles</li>
            <li>Career advice and professional development</li>
          </ul>

          <h2>Our Team</h2>
          <p>
            We're a diverse group of developers, designers, and technical writers who are 
            passionate about sharing what we learn. Each article is carefully researched and 
            reviewed to ensure accuracy and clarity.
          </p>

          <h2>Join Our Community</h2>
          <p>
            Subscribe to our newsletter to get the latest posts delivered to your inbox. 
            We publish new content every week, covering the latest trends and timeless 
            fundamentals in software development.
          </p>
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
