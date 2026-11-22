import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Headphones } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Smart Contract",
      description: "Our smart contract has the original HASH, for this reason it is impossible to distinguish our Flash USDT from the real one!"
    },
    {
      icon: Zap,
      title: "Easy to Use",
      description: "When you buy our Flash USDT to the mail you get a key, the ability to log in to your personal account on our site, where you can send Flash USDT."
    },
    {
      icon: Headphones,
      title: "Tech Support",
      description: "Contact us at any time via Telegram, WhatsApp for assistance from our administrators"
    }
  ];

  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-muted-foreground mb-4">Why we're</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            The best service among Flash
            <br />
            <span className="text-[hsl(var(--flash-primary))]">USDT BTC ETH</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-[hsl(var(--flash-border))] bg-card/80 hover:bg-card transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[hsl(var(--flash-primary))]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--flash-primary))]/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-[hsl(var(--flash-primary))]" />
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="flash-glow" 
            size="lg"
            onClick={handleScrollToPricing}
          >
            Get Flash
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;