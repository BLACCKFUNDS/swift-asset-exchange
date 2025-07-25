import { MessageCircle, Phone, Shield, Clock } from "lucide-react";
import cryptoIcon from "@/assets/crypto-icon.png";

const Footer = () => {
  return (
    <footer className="bg-crypto-dark border-t border-crypto-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={cryptoIcon} alt="FlashUSDT" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">FlashUSDT Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The #1 generator on the market for Flash USDT, BTC, ETH with original HASH technology.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-crypto-primary" />
              <span className="text-sm text-crypto-primary">100% Safe & Secure</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Flash USDT Generation</li>
              <li>Flash BTC Generation</li>
              <li>Flash ETH Generation</li>
              <li>Flash SOL Generation</li>
              <li>Flash BNB Generation</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-crypto-primary" />
                <a href="https://t.me/cryptoflasha" className="text-sm text-muted-foreground hover:text-crypto-primary transition-colors">
                  @cryptoflasha
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-crypto-primary" />
                <a href="https://wa.me/84813504458" className="text-sm text-muted-foreground hover:text-crypto-primary transition-colors">
                  +84813504458
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-crypto-primary" />
                <span className="text-sm text-muted-foreground">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Payment Methods</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                USDT (TRC20)
              </div>
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                USDT (BEP20)
              </div>
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                USDT (ERC20)
              </div>
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                BTC
              </div>
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                BNB
              </div>
              <div className="px-2 py-1 bg-crypto-card rounded border border-crypto-border text-center">
                ETH
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-crypto-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FlashUSDT Pro. All rights reserved. 
            <span className="text-crypto-primary ml-2">Secure • Reliable • Professional</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;