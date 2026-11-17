import { ArrowDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlashHero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-surface relative flex min-h-[680px] items-center overflow-hidden border-b border-border/70">
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl animate-slide-up">
          <div className="mb-8 inline-flex items-center gap-2 border border-primary/30 bg-background/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Simulation interface · No real crypto
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-primary">
            Crypto Flasher
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] text-foreground md:text-7xl">
            Explore a crypto interface, not a real asset.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Crypto Flasher is a visual simulation. It does not create genuine
            blockchain assets, send transactions, or transfer funds.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="flash-glow" size="lg" onClick={scrollToPricing}>
              View simulation tiers <ArrowDown aria-hidden="true" />
            </Button>
            <Button variant="flash-outline" size="lg" asChild>
              <a href="https://t.me/cryptoflasha" target="_blank" rel="noopener noreferrer">
                <Send aria-hidden="true" /> Telegram
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://wa.me/17873715591" target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-7 max-w-xl border-l-2 border-primary/60 pl-4 text-sm leading-6 text-muted-foreground">
            Do not send cryptocurrency expecting genuine tokens, a wallet credit,
            or a blockchain transfer.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-px w-2/5 bg-gradient-to-l from-primary/70 to-transparent" aria-hidden="true" />
    </section>
  );
};

export default FlashHero;