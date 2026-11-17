import { MessageCircle, Send, Zap } from "lucide-react";

const FlashFooter = () => (
  <footer id="contact" className="scroll-mt-20 bg-card/40">
    <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <a className="mb-4 inline-flex items-center gap-3" href="#top">
          <span className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
            <Zap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold text-foreground">Crypto Flasher</span>
        </a>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          A visual simulation only. This site does not create genuine crypto assets or blockchain transfers.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-sm font-semibold text-foreground">Contact</h2>
        <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-2 transition-colors hover:text-primary" href="https://t.me/cryptoflasha" target="_blank" rel="noopener noreferrer">
            <Send className="h-4 w-4" aria-hidden="true" /> Telegram · @cryptoflasha
          </a>
          <a className="inline-flex items-center gap-2 transition-colors hover:text-primary" href="https://wa.me/17873715591" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp · +17873715591
          </a>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-sm font-semibold text-foreground">Listed payment methods</h2>
        <p className="text-sm leading-6 text-muted-foreground">USDT · TRC20 · BEP20 · ERC20 · BTC · ETH · BNB · SOL</p>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">Addresses shown in the interface are unverified; this site does not process payments.</p>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container mx-auto flex flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2022 Crypto Flasher. All rights reserved.</p>
        <p>Simulation only · No real cryptocurrency is created or transferred.</p>
      </div>
    </div>
  </footer>
);

export default FlashFooter;