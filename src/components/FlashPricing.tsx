import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import FlashPaymentDialog from "./FlashPaymentDialog";

const FlashPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const plans = [
    {
      name: "Lite",
      price: 50,
      flashAmount: "2,500 FlashUSDT",
      description: "It's perfect for a starter.",
      popular: false,
      badge: null as string | null,
      tier: "default" as "default" | "green",
      features: [
        "2,500$ Flash USDT,BTC,SOL,BNB,ETH",
        "Tokens life - 180 days",
        "Tradable",
        "Transferable!",
        "TRC20,ERC20,BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ]
    },
    {
      name: "Base",
      price: 100,
      flashAmount: "5,000 FlashUSDT",
      description: "It's perfect for a starter.",
      popular: false,
      badge: null,
      tier: "default" as const,
      features: [
        "5,000$ Flash USDT,BTC,SOL,BNB,ETH",
        "Tokens life - 180 days",
        "Tradable",
        "Transferable!",
        "TRC20,ERC20,BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ]
    },
    {
      name: "Standard",
      price: 500,
      flashAmount: "25,000 FlashUSDT",
      description: "Great value for money.",
      popular: false,
      badge: null,
      tier: "default" as const,
      features: [
        "25,000$ Flash USDT,BTC,SOL,BNB,ETH",
        "Tokens life - 180 days",
        "Tradable",
        "Transferable!",
        "TRC20,ERC20,BNB",
        "ALL WALLETS",
        "ALL EXCHANGES"
      ]
    },
    {
      name: "Pro",
      price: 1000,
      flashAmount: "50,000 FlashUSDT",
      description: "Ideal for advanced buyers.",
      popular: true,
      badge: null,
      tier: "default" as const,
      features: [
        "50,000$ Flash USDT",
        "BTC,SOL,BNB,ETH",
        "Tokens life - 180 days",
        "Tradable",
        "TRC20,ERC20,BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ]
    },
    {
      name: "Gold",
      price: 1500,
      flashAmount: "100,000 FlashUSDT",
      description: "Ultimate professional package.",
      popular: true,
      badge: "Most Popular",
      tier: "green" as const,
      features: [
        "100,000$ Flash USDT",
        "BTC,SOL,BNB,TON",
        "Tokens life - 180 days",
        "Tradable",
        "TRC20,ERC20,BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ]
    },
    {
      name: "Premium",
      price: 5000,
      flashAmount: "500,000 FlashUSDT",
      description: "Premium professional package.",
      popular: false,
      badge: "Best Value",
      tier: "green" as const,
      features: [
        "500,000$ Flash USDT",
        "BTC,SOL,BNB,TON",
        "Tokens life - 180 days",
        "Tradable",
        "TRC20,ERC20,BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ]
    },
    {
      name: "Crown",
      price: 10000,
      flashAmount: "1,000,000 FlashUSDT",
      description: "Elite ultimate package.",
      popular: true,
      badge: null,
      tier: "green" as const,
      features: [
        "1,000,000$ Flash USDT",
        "BTC,SOL,BNB,TON,ETH",
        "Tokens life - 180 days",
        "Tradable",
        "TRC20,ERC20,BNB",
        "100% Safe",
        "Transferable!",
        "DEPOSIT ALL WALLETS",
        "DEPOSIT ALL EXCHANGES"
      ]
    }
  ];

  const handleBuyClick = (plan: any) => {
    setSelectedPlan(plan);
    setIsPaymentDialogOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-muted-foreground mb-4">Prices</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Pricing Plans
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer adaptable pricing solutions for customers of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-[hsl(var(--flash-border))] ${
                plan.popular 
                  ? 'bg-[hsl(var(--flash-primary))]/5 border-[hsl(var(--flash-primary))]/50 scale-105' 
                  : 'bg-card/50'
              } hover:bg-card transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--flash-primary))] text-[hsl(var(--flash-primary-foreground))]">
                  Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-semibold capitalize">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-[hsl(var(--flash-primary))]">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">
                    / {plan.flashAmount}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  variant={plan.popular ? "flash-glow" : "flash"}
                  className="w-full"
                  onClick={() => handleBuyClick(plan)}
                >
                  Buy
                </Button>

                <div>
                  <p className="text-sm font-medium mb-3">What's included:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[hsl(var(--flash-primary))] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <FlashPaymentDialog
        isOpen={isPaymentDialogOpen}
        onOpenChange={setIsPaymentDialogOpen}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default FlashPricing;