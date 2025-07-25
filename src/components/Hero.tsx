import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, MessageCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CryptoScene from "./CryptoScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-crypto-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-crypto-glow rounded-full animate-float delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-crypto-primary rounded-full animate-float delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-crypto-glow rounded-full animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-crypto-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-crypto-glow/30 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-crypto-primary border-crypto-primary/20 animate-pulse-glow">
            <Zap className="w-4 h-4 mr-2" />
            New: Our Flash USDT now have the original HASH
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">#1 Generator</span> on the market
            <br />
            <span className="text-transparent bg-gradient-to-r from-crypto-glow to-crypto-primary bg-clip-text">Flash USDT & Crypto</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0">
            Generate Flash USDT, BTC, ETH, BNB, SOL, and TON with original HASH. Tradable, transferable, and secure on all wallets and exchanges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <Button variant="crypto" size="xl" className="shadow-2xl animate-pulse-glow">
              Start Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="crypto-outline" size="xl" className="hover:scale-105 transition-transform duration-300">
              Learn More
            </Button>
          </div>

          {/* Business Contact Card */}
          <div className="bg-crypto-card/50 backdrop-blur-sm border border-crypto-border rounded-xl p-6 max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold mb-4 text-crypto-primary">Contact & Payment</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-crypto-primary" />
                <span className="text-sm">Telegram: <span className="text-crypto-primary font-medium">@cryptoflasha</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-crypto-primary" />
                <span className="text-sm">WhatsApp: <span className="text-crypto-primary font-medium">+84813504458</span></span>
              </div>
              <div className="pt-2 border-t border-crypto-border">
                <p className="text-xs text-muted-foreground mb-2">Payment Methods:</p>
                <div className="flex flex-wrap gap-1">
                  {["USDT", "TRC20", "BEP20", "ERC20", "BTC", "BNB", "ETH"].map((method) => (
                    <span key={method} className="px-2 py-1 bg-crypto-primary/10 text-crypto-primary rounded text-xs">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Visual */}
        <div className="flex justify-center lg:justify-end animate-scale-in delay-300">
          <div className="relative">
            <CryptoScene />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;