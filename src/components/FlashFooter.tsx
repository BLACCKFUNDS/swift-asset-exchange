import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlashFooter = () => {
  return (
    <footer className="bg-card border-t border-[hsl(var(--flash-border))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[hsl(var(--flash-primary))] rounded-full flex items-center justify-center">
                <span className="text-[hsl(var(--flash-primary-foreground))] font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">FlashUSDT</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The #1 Flash USDT generator on the market with original HASH smart contracts.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Flash USDT Generation</li>
              <li>Flash BTC</li>
              <li>Flash ETH</li>
              <li>Flash BNB</li>
              <li>Flash SOL</li>
              <li>Flash TON</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <Button 
                variant="flash-outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => window.open("https://t.me/cryptoflasha", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                @cryptoflasha
              </Button>
              <Button 
                variant="flash-outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => window.open("https://wa.me/17873715591", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                +17873715591
              </Button>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>₮</span>
                <span>USDT (TRC20, BEP20, ERC20)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>₿</span>
                <span>Bitcoin (BTC)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Ξ</span>
                <span>Ethereum (ETH)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>◆</span>
                <span>Binance Coin (BNB)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--flash-border))] mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2022 FlashUSDT. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Professional Flash USDT generation service with 24/7 support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FlashFooter;