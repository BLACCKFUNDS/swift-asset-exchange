import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, HeadphonesIcon, Lock, Wallet, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Contract",
      description: "Our smart contract has the original HASH, for this reason it is impossible to distinguish our Flash USDT from the real one!",
      highlight: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy to Use",
      description: "When you buy our Flash USDT to the mail you get a key, the ability to log in to your personal account on our site, where you can send Flash USDT.",
      highlight: false
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "24/7 Tech Support",
      description: "Contact us at any time via Telegram, WhatsApp for assistance from our administrators",
      highlight: false
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "100% Safe",
      description: "All transactions are encrypted and secured with military-grade security protocols",
      highlight: false
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "All Wallets",
      description: "Compatible with all major wallets and exchanges including TRC20, ERC20, BEP20",
      highlight: false
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tradable & Swappable",
      description: "Full trading capabilities - swap, transfer, and deposit on all major exchanges",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-crypto-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-crypto-primary border-crypto-primary/20">
            Why we're
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Best Service Among Flash{" "}
            <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">
              USDT BTC ETH
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:scale-105 ${
                feature.highlight 
                  ? 'border-crypto-primary shadow-[var(--shadow-glow)] bg-gradient-to-b from-crypto-card to-background' 
                  : 'border-crypto-border hover:border-crypto-primary/50'
              }`}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto p-3 rounded-full mb-4 w-fit ${
                  feature.highlight 
                    ? 'bg-gradient-to-r from-crypto-primary to-crypto-glow text-crypto-dark' 
                    : 'bg-crypto-primary/10 text-crypto-primary'
                }`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;