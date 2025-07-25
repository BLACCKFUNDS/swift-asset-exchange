import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import cryptoIcon from "@/assets/crypto-icon.png";
import CryptoTicker from "./CryptoTicker";
import TopBanner from "./TopBanner";

const Header = () => {
  return (
    <>
      <TopBanner />
      <CryptoTicker />
      <header className="sticky top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-crypto-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={cryptoIcon} alt="Crypto Flasher" className="w-8 h-8 animate-pulse-glow" />
            <span className="text-xl font-bold text-foreground">Crypto Flasher</span>
          </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-crypto-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-crypto-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-crypto-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-crypto-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Pricing</a>
          <a href="#reviews" className="text-muted-foreground hover:text-crypto-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-crypto-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Reviews</a>
          <a href="#contact" className="text-muted-foreground hover:text-crypto-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-crypto-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
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
    </>
  );
};

export default Header;