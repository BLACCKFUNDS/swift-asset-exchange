import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlashFooter = () => {
  return (
    <footer className="bg-card border-t border-[hsl(var(--flash-border))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[hsl(var(--flash-primary))] rounded-full flex items-center justify-center">
                <span className="text-[hsl(var(--flash-primary-foreground))] font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">Crypto Flasher</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Live crypto prices and simple guides. Informational only.
            </p>
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

                  </div>

        <div className="border-t border-[hsl(var(--flash-border))] mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2022 Crypto Flasher. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Not financial advice. This site does not sell or transfer crypto.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FlashFooter;