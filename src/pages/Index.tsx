import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Features />
        <Stats />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
