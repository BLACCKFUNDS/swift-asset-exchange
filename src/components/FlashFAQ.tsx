import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = [
  ["What is a crypto wallet?", "A wallet stores the keys that control your coins. Never share your recovery phrase with anyone."],
  ["Why do networks matter?", "Sending a token on the wrong network can lose it. Always check that the sender and receiver use the same network."],
  ["Can someone sell me crypto that disappears later?", "Yes. 'Flash' coins are a common scam: they show a balance for a while, then vanish. Real crypto can't be created out of nothing."],
  ["Does this site sell crypto?", "No. Crypto Flasher only shows information and live prices."],
];
const FlashFAQ = () => (
  <section id="faq" className="py-20">
    <div className="container max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {FAQ.map(([q, a], i) => (
          <AccordionItem key={i} value={`i${i}`} className="card-elevated px-6 border">
            <AccordionTrigger className="text-left font-semibold">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
export default FlashFAQ;
