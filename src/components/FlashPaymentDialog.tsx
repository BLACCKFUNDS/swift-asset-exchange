import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Upload, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FlashPaymentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: {
    name: string;
    price: number;
  } | null;
}

const FlashPaymentDialog = ({ isOpen, onOpenChange, selectedPlan }: FlashPaymentDialogProps) => {
  const [userWallet, setUserWallet] = useState("");
  const [flashType, setFlashType] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const paymentMethods = [
    {
      name: "USDT TRC20",
      address: "TYrW6KbjvaM2oYSPanht6LC2DLBwYR9gfh",
      network: "TRC20",
      icon: "₮"
    },
    {
      name: "USDT BEP20",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "BEP20",
      icon: "₮"
    },
    {
      name: "USDT ERC20",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "ERC20",
      icon: "₮"
    },
    {
      name: "Bitcoin",
      address: "bc1q6059p46a0gdyxltplzhcmwxp7jnfr88nhh95ar",
      network: "BTC",
      icon: "₿"
    },
    {
      name: "Ethereum",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "ETH",
      icon: "Ξ"
    },
    {
      name: "Solana",
      address: "ZWVARjXeBnEyA4ZNd5itNLnLWkNr5k479avD3QwZnkK",
      network: "SOL",
      icon: "◎"
    },
    {
      name: "BNB",
      address: "0x554140f7aBA6d7e26a7815683a15770Db4Cf74e1",
      network: "BNB",
      icon: "◆"
    }
  ];

  const copyToClipboard = async (address: string, methodName: string) => {
    try {
      await navigator.clipboard.writeText(address);
      toast({
        title: "Address Copied!",
        description: `${methodName} address copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPaymentReceipt(file);
    }
  };

  const handleSubmitOrder = async () => {
    if (!userWallet || !flashType || !paymentReceipt) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Order Submitted!",
      description: "Your order has been submitted successfully. Check your email for confirmation.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
    
    // Reset form
    setUserWallet("");
    setFlashType("");
    setPaymentReceipt(null);
  };

  const handleContactSupport = () => {
    window.open("https://t.me/cryptoflasha", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-[hsl(var(--flash-border))]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Complete Your Purchase
          </DialogTitle>
          {selectedPlan && (
            <div className="text-center text-muted-foreground">
              <p>Plan: <span className="text-[hsl(var(--flash-primary))] font-semibold capitalize">{selectedPlan.name}</span></p>
              <p>Amount: <span className="text-[hsl(var(--flash-primary))] font-semibold">${selectedPlan.price}</span></p>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-6">
          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="border-[hsl(var(--flash-border))] hover:border-[hsl(var(--flash-primary))]/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <h4 className="font-semibold">{method.name}</h4>
                          <p className="text-xs text-muted-foreground">{method.network}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(method.address, method.name)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="bg-muted/50 p-2 rounded text-xs font-mono break-all">
                      {method.address}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Order Details</h3>
            
            <div>
              <Label htmlFor="userWallet">Your Wallet Address</Label>
              <Input
                id="userWallet"
                value={userWallet}
                onChange={(e) => setUserWallet(e.target.value)}
                placeholder="Enter your wallet address where you want to receive flash tokens"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="flashType">Flash Type</Label>
              <Input
                id="flashType"
                value={flashType}
                onChange={(e) => setFlashType(e.target.value)}
                placeholder="e.g., USDT TRC20, BTC, ETH"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="receipt">Payment Receipt</Label>
              <div className="mt-1">
                <Input
                  id="receipt"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                />
                {paymentReceipt && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Selected: {paymentReceipt.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-muted/20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Business Contact Information</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Telegram: @cryptoflasha</p>
              <p>WhatsApp: +84813504458</p>
              <p className="text-xs mt-2">
                Accepted payments: USDT (TRC20, BEP20, ERC20), BTC, BNB, ETH
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="flash-glow"
              onClick={handleSubmitOrder}
              disabled={isSubmitting || !userWallet || !flashType || !paymentReceipt}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </Button>
            
            <Button
              variant="flash-outline"
              onClick={handleContactSupport}
              className="flex-1"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
            
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            <p>After payment, you will receive access to your personal dashboard within 24 hours.</p>
            <p>All transactions are processed securely. Contact support for any assistance.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FlashPaymentDialog;