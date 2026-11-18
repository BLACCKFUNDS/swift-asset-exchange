import { useState } from "react";
import { ExternalLink, FileUp, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FlashPaymentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: {
    name: string;
    price: number;
    flashAmount: number;
  } | null;
}

const paymentMethods = ["USDT · TRC20", "USDT · BEP20", "USDT · ERC20", "Bitcoin · BTC", "Ethereum · ETH", "Solana · SOL", "BNB"];

const FlashPaymentDialog = ({ isOpen, onOpenChange, selectedPlan }: FlashPaymentDialogProps) => {
  const [userWallet, setUserWallet] = useState("");
  const [flashType, setFlashType] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePreview = async () => {
    if (!userWallet.trim() || !flashType || !paymentReceipt) {
      toast({
        title: "Complete the preview fields",
        description: "Add a wallet address, select a network, and choose a local receipt file.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    toast({
      title: "Preview complete",
      description: "Nothing was sent, uploaded, stored, or verified. No order was created.",
    });
    setIsSubmitting(false);
    onOpenChange(false);
    setUserWallet("");
    setFlashType("");
    setPaymentReceipt(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold text-foreground">Simulation details</DialogTitle>
          {selectedPlan && (
            <p className="text-sm text-muted-foreground">
              {selectedPlan.name} · ${new Intl.NumberFormat("en-US").format(selectedPlan.price)} · {new Intl.NumberFormat("en-US").format(selectedPlan.flashAmount)} illustrative units
            </p>
          )}
        </DialogHeader>

        <div className="border-l-2 border-primary bg-primary/5 px-4 py-3 text-sm leading-6 text-foreground">
          <strong>This simulation does not accept or process payments.</strong>
          <p className="mt-1 text-muted-foreground">No payment addresses are provided. No genuine crypto, wallet credit, order, or blockchain transfer is created.</p>
        </div>

        <section aria-labelledby="payment-addresses-title">
          <h3 id="payment-addresses-title" className="mb-3 text-sm font-semibold text-foreground">Payment methods previously listed</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {paymentMethods.map((method) => (
              <div key={method} className="border border-border bg-background/70 px-3 py-2.5 text-sm text-muted-foreground">
                {method}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-t border-border pt-5" aria-labelledby="preview-fields-title">
          <div>
            <h3 id="preview-fields-title" className="text-sm font-semibold text-foreground">Local preview fields</h3>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">These details stay in this browser session and are not sent or saved.</p>
          </div>
          <div>
            <Label htmlFor="userWallet">Wallet address (preview only)</Label>
            <Input
              id="userWallet"
              value={userWallet}
              onChange={(event) => setUserWallet(event.target.value)}
              placeholder="Enter a wallet address"
              className="mt-2"
              autoComplete="off"
            />
          </div>
          <div>
            <Label htmlFor="flashType">Network for the simulation</Label>
            <Select value={flashType} onValueChange={setFlashType}>
              <SelectTrigger id="flashType" className="mt-2">
                <SelectValue placeholder="Choose a network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USDT-TRC20">USDT · TRC20</SelectItem>
                <SelectItem value="USDT-BEP20">USDT · BEP20</SelectItem>
                <SelectItem value="USDT-ERC20">USDT · ERC20</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="receipt">Receipt file (local preview only)</Label>
            <Input
              id="receipt"
              type="file"
              accept="image/*,.pdf"
              onChange={(event) => setPaymentReceipt(event.target.files?.[0] ?? null)}
              className="mt-2 cursor-pointer"
            />
            {paymentReceipt && (
              <p className="mt-2 flex items-center gap-2 text-xs text-primary">
                <FileUp className="h-4 w-4" aria-hidden="true" /> {paymentReceipt.name} — remains on this device
              </p>
            )}
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
          <Button variant="flash-glow" className="sm:flex-1" onClick={handlePreview} disabled={isSubmitting}>
            {isSubmitting ? "Finishing preview…" : "Finish local preview"}
          </Button>
          <Button variant="flash-outline" asChild>
            <a href="https://t.me/cryptoflasha" target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> Contact on Telegram <ExternalLink aria-hidden="true" />
            </a>
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FlashPaymentDialog;