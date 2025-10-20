import { Header } from "@/components/blog/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-20 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Est. 2025</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            About DevBlog
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering developers worldwide with cutting-edge insights, practical tutorials, and inspiring stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Innovation First</h3>
            <p className="text-muted-foreground">We stay ahead of the curve, bringing you the latest in web development technology and best practices.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
            <p className="text-muted-foreground">Every article is designed to be actionable, with real-world examples you can implement immediately.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-muted-foreground">Join thousands of developers from around the world who trust DevBlog for their learning journey.</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop"
            alt="About us - Team collaboration"
            className="w-full rounded-lg mb-12 shadow-lg"
          />

          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            DevBlog was born from a simple yet powerful vision: to democratize web development knowledge 
            and make learning accessible to everyone, everywhere. In a rapidly evolving tech landscape, 
            we believe that quality education shouldn't be a privilege—it should be a right.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're taking your first steps into coding, transitioning from another field, or 
            you're a seasoned professional looking to master the latest frameworks, our carefully crafted 
            content meets you where you are and helps you reach where you want to be.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded">
            <p className="text-lg italic mb-0">
              "Our goal is not just to teach you to code, but to help you think like a developer, 
              solve problems creatively, and build solutions that make a real difference."
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4">What We Write About</h2>
          <p className="text-lg leading-relaxed">
            Our editorial focus spans the entire spectrum of modern web development, carefully curated 
            to provide maximum value:
          </p>
          <ul className="space-y-2 text-lg">
            <li><strong>Modern Frameworks & Tools</strong> - Deep dives into React, Vue, TypeScript, and emerging technologies</li>
            <li><strong>Design Systems & UI/UX</strong> - Creating beautiful, accessible, and user-centered interfaces</li>
            <li><strong>Performance Optimization</strong> - Making your applications lightning-fast and efficient</li>
            <li><strong>Best Practices & Patterns</strong> - Writing clean, maintainable, and scalable code</li>
            <li><strong>Career Development</strong> - Growing your skills, building your portfolio, and advancing your career</li>
            <li><strong>Real-World Projects</strong> - Hands-on tutorials that build actual applications</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 mt-12">Our Team</h2>
          <p className="text-lg leading-relaxed">
            DevBlog is powered by a diverse, passionate team of developers, designers, technical writers, 
            and educators from around the globe. Our contributors come from leading tech companies, 
            innovative startups, and open-source communities—each bringing unique perspectives and 
            real-world experience.
          </p>
          <p className="text-lg leading-relaxed">
            Every article goes through our rigorous editorial process, ensuring technical accuracy, 
            clarity, and practical value. We don't just write about code—we live it, breathe it, 
            and love sharing what we learn with you.
          </p>

          <h2 className="text-3xl font-bold mb-4 mt-12">Join Our Community</h2>
          <p className="text-lg leading-relaxed">
            Become part of our thriving community of learners, builders, and innovators. Subscribe to 
            our newsletter and get hand-picked articles, exclusive tutorials, and industry insights 
            delivered directly to your inbox every week.
          </p>
          <p className="text-lg leading-relaxed">
            We publish fresh content regularly, covering everything from cutting-edge trends to 
            timeless fundamentals. Whether you prefer to learn through comprehensive guides, 
            quick tips, or video tutorials, we've got something for every learning style.
          </p>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Level Up?</h3>
            <p className="text-lg mb-6">Join over 50,000 developers who trust DevBlog for their learning journey.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Expert Contributors</div>
              </div>
            </div>
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
