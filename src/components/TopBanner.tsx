import { MessageCircle, Send } from "lucide-react";

const TopBanner = () => (
  <div className="border-b border-primary/20 bg-primary/5 px-4 py-2.5">
    <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
      <p className="text-center font-medium text-foreground sm:text-left">
        Test-only simulation. No genuine tokens or blockchain transfers are created.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-muted-foreground">
        <a className="inline-flex items-center gap-1.5 transition-colors hover:text-primary" href="https://t.me/cryptoflasha" target="_blank" rel="noopener noreferrer">
          <Send className="h-3.5 w-3.5" aria-hidden="true" /> @cryptoflasha
        </a>
        <a className="inline-flex items-center gap-1.5 transition-colors hover:text-primary" href="https://wa.me/17873715591" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> +17873715591
        </a>
      </div>
    </div>
  </div>
);

export default TopBanner;