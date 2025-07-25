import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: {
    name: string;
    price: string;
    amount: string;
  } | null;
}

const PaymentDialog = ({ isOpen, onOpenChange, selectedPlan }: PaymentDialogProps) => {
  const [copiedAddress, setCopiedAddress] = useState<string>("");
  const { toast } = useToast();

  const paymentMethods = [
    {
      name: "USDT (TRC20)",
      address: "TYrW6KbjvaM2oYSPanht6LC2DLBwYR9gfh",
      network: "Tron Network",
      color: "bg-green-500",
      icon: "💚"
    },
    {
      name: "USDT (BEP20)",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "BSC Network",
      color: "bg-yellow-500",
      icon: "💛"
    },
    {
      name: "USDT (ERC20)",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "Ethereum Network",
      color: "bg-blue-500",
      icon: "💙"
    },
    {
      name: "BTC",
      address: "bc1q6059p46a0gdyxltplzhcmwxp7jnfr88nhh95ar",
      network: "Bitcoin Network",
      color: "bg-orange-500",
      icon: "🧡"
    },
    {
      name: "ETH",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "Ethereum Network",
      color: "bg-purple-500",
      icon: "💜"
    },
    {
      name: "SOLANA",
      address: "ZWVARjXeBnEyA4ZNd5itNLnLWkNr5k479avD3QwZnkK",
      network: "Solana Network",
      color: "bg-pink-500",
      icon: "💖"
    },
    {
      name: "BNB",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "BSC Network",
      color: "bg-yellow-600",
      icon: "💛"
    }
  ];

  const copyToClipboard = async (address: string, methodName: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      toast({
        title: "Address Copied!",
        description: `${methodName} address copied to clipboard`,
        duration: 3000,
      });
      setTimeout(() => setCopiedAddress(""), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy address to clipboard",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-crypto-dark border-crypto-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Choose Payment Method
          </DialogTitle>
          {selectedPlan && (
            <div className="text-center mb-6">
              <Badge variant="secondary" className="text-crypto-primary border-crypto-primary/20 mb-2">
                {selectedPlan.name} Plan
              </Badge>
              <div className="text-lg">
                <span className="text-2xl font-bold text-crypto-primary">{selectedPlan.price}</span>
                <span className="text-muted-foreground ml-2">for {selectedPlan.amount} Flash daily</span>
              </div>
            </div>
          )}
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="border-crypto-border bg-crypto-card/50 backdrop-blur-sm hover:border-crypto-primary/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`w-8 h-8 rounded-full ${method.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-crypto-primary">{method.name}</div>
                    <div className="text-xs text-muted-foreground">{method.network}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-crypto-dark/50 p-3 rounded-lg border border-crypto-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4 text-crypto-primary" />
                    <span className="text-xs text-muted-foreground">Wallet Address:</span>
                  </div>
                  <div className="text-sm font-mono break-all text-foreground mb-3">
                    {method.address}
                  </div>
                  <Button
                    variant={copiedAddress === method.address ? "default" : "crypto-outline"}
                    size="sm"
                    className="w-full"
                    onClick={() => copyToClipboard(method.address, method.name)}
                  >
                    {copiedAddress === method.address ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Address
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-crypto-card/30 rounded-lg border border-crypto-border">
          <h4 className="font-semibold text-crypto-primary mb-2">Payment Instructions:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Send exact payment amount to the selected wallet address</li>
            <li>• Contact us on Telegram (@cryptoflasha) after payment</li>
            <li>• Include transaction hash for faster processing</li>
            <li>• Processing time: 5-30 minutes after confirmation</li>
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          <Button
            variant="crypto"
            className="flex-1"
            onClick={() => window.open('https://t.me/cryptoflasha', '_blank')}
          >
            Contact Support
          </Button>
          <Button
            variant="crypto-outline"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;