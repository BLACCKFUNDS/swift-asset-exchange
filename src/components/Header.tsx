import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import cryptoIcon from "@/assets/crypto-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-crypto-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={cryptoIcon} alt="FlashUSDT" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">FlashUSDT Pro</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="crypto-outline" size="sm" className="hidden sm:flex">
            <MessageCircle className="w-4 h-4" />
            Telegram
          </Button>
          <Button variant="crypto" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;