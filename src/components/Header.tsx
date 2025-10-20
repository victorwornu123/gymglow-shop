import { ShoppingCart } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GymGlow
          </span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <CartDrawer />
        </nav>
      </div>
    </header>
  );
};
