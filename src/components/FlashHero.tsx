import { Button } from "@/components/ui/button";
import HeroOrb from "./HeroOrb";
import { MessageCircle, Play } from "lucide-react";

const FlashHero = () => {
  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background dot-pattern overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--flash-primary))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[hsl(var(--flash-accent))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The <span className="gradient-text">#1 generator</span> on the
            <br />
            market <span className="text-[hsl(var(--flash-primary))]">Flash USDT</span>
          </h1>

          <HeroOrb />
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              variant="flash-glow" 
              size="xl" 
              onClick={handleScrollToPricing}
              className="animate-pulse-glow rounded-xl font-extrabold border-2 border-[hsl(var(--flash-primary))] shadow-[0_0_18px_hsl(var(--flash-primary)/0.5)]"
            >
              Get Flash
            </Button>
          </div>

          <div className="space-y-4 pt-8">
            <Button
              variant="flash-glow"
              size="lg"
              className="gap-2 rounded-xl text-base font-extrabold px-8 border-2 border-[hsl(var(--flash-primary))] shadow-[0_0_18px_hsl(var(--flash-primary)/0.5)]"
              onClick={() => window.open("https://t.me/cryptoflashaagroup", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Our Telegram channel!
            </Button>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('/video-proof.mp4', '_blank')}
              >
                <Play className="w-4 h-4" />
                Video Proofs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashHero;