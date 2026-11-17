import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlashPaymentDialog from "./FlashPaymentDialog";

type Plan = {
  name: string;
  price: number;
  flashAmount: number;
  badge?: string;
};

const plans: Plan[] = [
  { name: "Lite", price: 50, flashAmount: 2500 },
  { name: "Base", price: 100, flashAmount: 5000 },
  { name: "Standard", price: 500, flashAmount: 25000 },
  { name: "Pro", price: 1000, flashAmount: 50000, badge: "Popular" },
  { name: "Gold", price: 1500, flashAmount: 100000, badge: "Most Popular" },
  { name: "Premium", price: 5000, flashAmount: 500000, badge: "Best Value" },
  { name: "Crown", price: 10000, flashAmount: 1000000 },
];

const formatUnits = (amount: number) => new Intl.NumberFormat("en-US").format(amount);

const FlashPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const showPlanDetails = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPaymentDialogOpen(true);
  };

  return (
    <section id="pricing" className="scroll-mt-20 border-b border-border/70 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Simulation tiers</p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">Illustrative plan details.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Prices and quantities below are displayed for a visual simulation only. They do not buy or deliver real cryptocurrency.
            </p>
          </div>
          <p className="max-w-sm border-l-2 border-primary/50 pl-4 text-sm leading-6 text-muted-foreground">
            No genuine assets, wallet credits, or blockchain transfers are created by this site.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex h-full flex-col border-primary/20 bg-card/80 transition-colors hover:border-primary/50">
              <CardHeader className="relative min-h-36 border-b border-border/70 pb-5 text-left">
                {plan.badge && (
                  <Badge className="mb-3 w-fit border border-primary/30 bg-primary/10 text-primary hover:bg-primary/10">
                    {plan.badge}
                  </Badge>
                )}
                <CardTitle className="text-lg font-semibold text-foreground">{plan.name}</CardTitle>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-3xl font-semibold text-primary">${formatUnits(plan.price)}</span>
                  <span className="text-sm text-muted-foreground">/ {formatUnits(plan.flashAmount)} simulated units</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-6 pt-5">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Simulation interface only",
                    "Not a real or transferable token",
                    "No wallet balance or on-chain activity",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-[2.5] text-primary" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="flash-outline" className="w-full justify-between" onClick={() => showPlanDetails(plan)}>
                  View details <ArrowRight aria-hidden="true" />
                </Button>
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