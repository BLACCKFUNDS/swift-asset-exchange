import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const FlashHero = () => (
  <section className="relative py-28 md:py-40 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-glow/20 blur-3xl" />
    </div>
    <div className="container relative text-center max-w-4xl space-y-8 animate-slide-up">
      <p className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm text-primary">Live market overview</p>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Track the crypto market with <span className="gradient-text">Crypto Flasher</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Live prices for the top coins, plus simple guides to wallets and networks. Informational only, no trading or payments.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <Button variant="flash-glow" size="xl" className="rounded-xl" onClick={() => go("prices")}>View Live Prices</Button>
        <Button variant="flash-outline" size="xl" className="rounded-xl" onClick={() => go("faq")}>Learn the Basics</Button>
      </div>
      <Button variant="ghost" className="gap-2" onClick={() => window.open("https://t.me/cryptoflashaagroup", "_blank")}>
        <MessageCircle className="w-4 h-4" /> Our Telegram channel!
      </Button>
    </div>
  </section>
);
export default FlashHero;
