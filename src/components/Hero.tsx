import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-crypto-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-crypto-glow rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-crypto-primary rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-crypto-glow rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <Badge variant="secondary" className="mb-6 text-crypto-primary border-crypto-primary/20">
          <Zap className="w-4 h-4 mr-2" />
          New: Our Flash USDT now have the original HASH
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          The <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">#1 Generator</span> on the market
          <br />
          <span className="text-transparent bg-gradient-to-r from-crypto-glow to-crypto-primary bg-clip-text">Flash USDT</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Generate authentic Flash USDT, BTC, ETH with original HASH. Indistinguishable from real transactions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="crypto" size="xl" className="shadow-2xl">
            Get Flash USDT
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="crypto-outline" size="xl">
            View Pricing
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <a href="https://t.me/cryptoflasha" className="flex items-center gap-2 text-crypto-primary hover:text-crypto-glow transition-colors">
            Our Telegram Channel
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            Video Proofs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;