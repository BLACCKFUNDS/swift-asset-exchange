import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Crypto Flasher?",
    answer: "It is a visual simulation interface. It does not create genuine cryptocurrency or blockchain assets.",
  },
  {
    question: "Will I receive real tokens or a wallet balance?",
    answer: "No. No tokens are issued or transferred, and this site cannot credit a wallet or make a blockchain transaction.",
  },
  {
    question: "What do the plan prices and amounts represent?",
    answer: "They are illustrative figures shown within the interface. They are not a promise of real cryptocurrency or financial value.",
  },
  {
    question: "Can this website verify a payment or order?",
    answer: "No. The page is client-only: it cannot submit an order, store an uploaded receipt, or verify a payment.",
  },
  {
    question: "Which payment methods are listed?",
    answer: "The page lists USDT (TRC20, BEP20, ERC20), BTC, ETH, BNB, and SOL. Listed wallet addresses are not verified by this simulation.",
  },
  {
    question: "How can I contact the business?",
    answer: "Use the Telegram or WhatsApp links in the top bar or page footer. Contacting the business does not change the simulation limitations described here.",
  },
];

const FlashFAQ = () => (
  <section id="faq" className="scroll-mt-20 border-b border-border/70 py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Questions</p>
        <h2 className="text-3xl font-semibold text-foreground md:text-5xl">FAQ</h2>
      </div>
      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-border px-1">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FlashFAQ;