import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FlashFAQ = () => {
  const faqItems = [
    {
      question: "Can I sell it?",
      answer: "Yes, our Flash USDT can be traded and swapped on exchanges. However, please note that these are temporary tokens with a specific lifespan depending on your chosen plan."
    },
    {
      question: "Can I use the coins to buy a car or a house?",
      answer: "Flash tokens are designed for specific use cases and have a temporary nature. We recommend understanding the full scope and limitations before making any major purchases. Contact our support team for detailed guidance."
    },
    {
      question: "How does it work?",
      answer: "After purchasing a plan, you receive access to our dashboard where you can generate and send Flash USDT/BTC/ETH. The tokens appear in wallets and exchanges just like real tokens but have a predetermined lifespan based on your subscription level."
    },
    {
      question: "What does it look like?",
      answer: "Flash tokens appear identical to real cryptocurrency in wallets and exchanges. They have the original HASH making them indistinguishable from genuine tokens during their active period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept USDT (TRC20, BEP20, ERC20), Bitcoin (BTC), Ethereum (ETH), and Binance Coin (BNB). All payments are processed securely through our verified wallet addresses."
    },
    {
      question: "How long does it take to get access?",
      answer: "After payment verification, you will receive your dashboard access within 24 hours. You'll get login credentials via email along with detailed instructions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[hsl(var(--flash-border))] rounded-lg px-6 bg-card/50"
              >
                <AccordionTrigger className="text-left hover:text-[hsl(var(--flash-primary))] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FlashFAQ;