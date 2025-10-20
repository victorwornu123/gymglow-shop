import heroImage from "@/assets/blog-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Blog hero" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Stories, Ideas &{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Inspiration
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts on development, design, and building amazing digital experiences
        </p>
      </div>
    </section>
  );
};
