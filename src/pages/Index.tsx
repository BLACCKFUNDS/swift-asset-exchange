import TopBanner from "@/components/TopBanner";
import FlashHeader from "@/components/FlashHeader";
import FlashHero from "@/components/FlashHero";
import WhyUs from "@/components/WhyUs";
import FlashStats from "@/components/FlashStats";
import FlashReviews from "@/components/FlashReviews";
import FlashPricing from "@/components/FlashPricing";
import FlashFAQ from "@/components/FlashFAQ";
import FlashFooter from "@/components/FlashFooter";

const Index = () => {
  return (
    <div id="top" className="min-h-screen">
      <TopBanner />
      <FlashHeader />
      <main>
        <FlashHero />
        <WhyUs />
        <FlashStats />
        <FlashReviews />
        <FlashPricing />
        <FlashFAQ />
      </main>
      <FlashFooter />
    </div>
  );
};

export default Index;
