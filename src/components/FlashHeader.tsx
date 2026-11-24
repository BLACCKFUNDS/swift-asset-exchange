import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

const FlashHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-[hsl(var(--flash-border))]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[hsl(var(--flash-primary))] rounded-full flex items-center justify-center animate-pulse-glow">
            <span className="text-[hsl(var(--flash-primary-foreground))] font-bold text-sm">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">FlashUSDT</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => handleScrollToSection('why-us')}
            className="text-muted-foreground hover:text-[hsl(var(--flash-primary))] transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => handleScrollToSection('reviews')}
            className="text-muted-foreground hover:text-[hsl(var(--flash-primary))] transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => handleScrollToSection('pricing')}
            className="text-muted-foreground hover:text-[hsl(var(--flash-primary))] transition-colors"
          >
            Prices
          </button>
          <button 
            onClick={() => handleScrollToSection('faq')}
            className="text-muted-foreground hover:text-[hsl(var(--flash-primary))] transition-colors"
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="flash-outline"
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open("https://t.me/cryptoflashaagroup", "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
            Our Telegram
          </Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[hsl(var(--flash-border))] bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <button 
              onClick={() => handleScrollToSection('why-us')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-[hsl(var(--flash-primary))]"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleScrollToSection('reviews')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-[hsl(var(--flash-primary))]"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleScrollToSection('pricing')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-[hsl(var(--flash-primary))]"
            >
              Prices
            </button>
            <button 
              onClick={() => handleScrollToSection('faq')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-[hsl(var(--flash-primary))]"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default FlashHeader;