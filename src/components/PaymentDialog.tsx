import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, CheckCircle, Wallet, Upload, Send } from "lucide-react";
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
  const [userWalletAddress, setUserWalletAddress] = useState<string>("");
  const [flashType, setFlashType] = useState<string>("");
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPaymentReceipt(file);
      toast({
        title: "Receipt Uploaded",
        description: `File "${file.name}" uploaded successfully`,
        duration: 3000,
      });
    }
  };

  const handleSubmitOrder = async () => {
    if (!userWalletAddress || !flashType || !paymentReceipt) {
      toast({
        title: "Missing Information",
        description: "Please fill all fields and upload payment receipt",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Order Submitted!",
        description: "Your order has been submitted. We'll contact you on Telegram soon.",
        duration: 5000,
      });
      setIsSubmitting(false);
      onOpenChange(false);
      // Reset form
      setUserWalletAddress("");
      setFlashType("");
      setPaymentReceipt(null);
    }, 2000);
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

        {/* Order Completion Form */}
        <div className="mt-8 p-6 bg-crypto-card/50 rounded-lg border border-crypto-border">
          <h4 className="font-semibold text-crypto-primary mb-4 flex items-center gap-2">
            <Send className="w-5 h-5" />
            Complete Your Order
          </h4>
          
          <div className="space-y-4">
            {/* Wallet Address Input */}
            <div>
              <Label htmlFor="wallet-address" className="text-sm font-medium text-foreground">
                Your Wallet Address (where you want to receive Flash)
              </Label>
              <Input
                id="wallet-address"
                type="text"
                placeholder="Enter your wallet address..."
                value={userWalletAddress}
                onChange={(e) => setUserWalletAddress(e.target.value)}
                className="mt-1 bg-crypto-dark border-crypto-border focus:border-crypto-primary"
              />
            </div>

            {/* Flash Type Selection */}
            <div>
              <Label htmlFor="flash-type" className="text-sm font-medium text-foreground">
                Choose Flash Type
              </Label>
              <Select value={flashType} onValueChange={setFlashType}>
                <SelectTrigger className="mt-1 bg-crypto-dark border-crypto-border focus:border-crypto-primary">
                  <SelectValue placeholder="Select network type..." />
                </SelectTrigger>
                <SelectContent className="bg-crypto-dark border-crypto-border">
                  <SelectItem value="trc20">TRC20 (Tron Network)</SelectItem>
                  <SelectItem value="bep20">BEP20 (BSC Network)</SelectItem>
                  <SelectItem value="erc20">ERC20 (Ethereum Network)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Payment Receipt Upload */}
            <div>
              <Label htmlFor="payment-receipt" className="text-sm font-medium text-foreground">
                Upload Payment Receipt
              </Label>
              <div className="mt-1">
                <input
                  id="payment-receipt"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="payment-receipt"
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-crypto-border hover:border-crypto-primary rounded-lg cursor-pointer bg-crypto-dark/50 hover:bg-crypto-dark/70 transition-colors"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-crypto-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {paymentReceipt ? paymentReceipt.name : "Click to upload payment receipt"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              variant="crypto"
              className="w-full mt-4"
              size="lg"
              onClick={handleSubmitOrder}
              disabled={isSubmitting || !userWalletAddress || !flashType || !paymentReceipt}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Submitting Order...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Order
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-crypto-card/30 rounded-lg border border-crypto-border">
          <h4 className="font-semibold text-crypto-primary mb-2">Payment Instructions:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Send exact payment amount to the selected wallet address</li>
            <li>• Upload your payment receipt/screenshot</li>
            <li>• Enter your wallet address where you want to receive Flash</li>
            <li>• Choose your preferred Flash network type</li>
            <li>• Contact us on Telegram (@cryptoflasha) after submitting</li>
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