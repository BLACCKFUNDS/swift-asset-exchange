import FlashHeader from "@/components/FlashHeader";
import FlashHero from "@/components/FlashHero";
import LivePrices from "@/components/LivePrices";
import Networks from "@/components/Networks";
import FlashFAQ from "@/components/FlashFAQ";
import FlashFooter from "@/components/FlashFooter";

const Index = () => (
  <div className="min-h-screen">
    <FlashHeader />
    <main>
      <FlashHero />
      <LivePrices />
      <Networks />
      <FlashFAQ />
    </main>
    <FlashFooter />
  </div>
);
export default Index;
