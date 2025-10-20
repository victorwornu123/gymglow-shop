import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gym equipment and training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
      </div>
      
      <div className="container relative z-10 text-center md:text-left">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Elevate Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Performance
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Premium sports and gym equipment designed for athletes who demand excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProducts}
            >
              Shop Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
