import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Lite",
      price: "$50",
      period: "/per month",
      description: "It's perfect for a starter.",
      amount: "1,500$",
      features: [
        "Flash USDT, BTC, SOL, BNB, ETH/daily",
        "Tokens life - 90 days",
        "Tradable, Swappable",
        "Transferable!",
        "TRC20, ERC20, BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ],
      popular: false
    },
    {
      name: "Base",
      price: "$150",
      period: "/per month",
      description: "It's perfect for a starter.",
      amount: "5,000$",
      features: [
        "Flash USDT, BTC, SOL, BNB, ETH/daily",
        "Tokens life - 90 days",
        "Tradable, Swappable",
        "Transferable!",
        "TRC20, ERC20, BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$300",
      period: "/per month",
      description: "It's perfect for a starter.",
      amount: "10,000$",
      features: [
        "Flash USDT, BTC, SOL, BNB, ETH/daily",
        "Tokens life - 90 days",
        "Tradable, Swappable",
        "Transferable!",
        "TRC20, ERC20, BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$430",
      period: "/per month",
      description: "Ideal for advanced buyers.",
      amount: "15,000$",
      features: [
        "Flash USDT, BTC, SOL, BNB, ETH/daily",
        "Tokens life - 180 days",
        "Tradable, Swappable",
        "TRC20, ERC20, BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ],
      popular: true
    },
    {
      name: "Gold",
      price: "$2,500",
      period: "/per month",
      description: "Ideal for advanced buyers.",
      amount: "100,000$",
      features: [
        "Flash USDT, BTC, SOL, BNB, TON/daily",
        "Tokens life - 180 days",
        "Tradable, Swappable",
        "TRC20, ERC20, BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-crypto-dark/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer adaptable pricing solutions for customers of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-crypto-primary shadow-[var(--shadow-glow)] bg-gradient-to-b from-crypto-card to-background' 
                  : 'border-crypto-border hover:border-crypto-primary/50'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-crypto-primary to-crypto-glow text-crypto-dark">
                  <Star className="w-4 h-4 mr-1" />
                  Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <div className="text-lg font-semibold text-crypto-primary">
                  {plan.amount} Flash daily
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-crypto-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "crypto" : "crypto-outline"} 
                  className="w-full mt-6"
                  size="lg"
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">
            Payment Methods Accepted
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">USDT (TRC20)</span>
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">USDT (BEP20)</span>
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">USDT (ERC20)</span>
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">BTC</span>
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">BNB</span>
            <span className="px-3 py-1 bg-crypto-card rounded-full border border-crypto-border">ETH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;