import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import p1 from "@/assets/wallet_proof_1.png.asset.json";
import p2 from "@/assets/wallet_proof_2.png.asset.json";
import p3 from "@/assets/wallet_proof_3.jpeg.asset.json";
import p4 from "@/assets/wallet_proof_4.jpeg.asset.json";
import p5 from "@/assets/wallet_proof_5.png.asset.json";

const images = [p1, p2, p3, p4, p5].map((p) => p.url);

const WalletProofsDialog = () => {
  const [active, setActive] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="gap-2 rounded-xl font-bold border-2 border-yellow-400 text-foreground shadow-[0_0_16px_rgba(250,204,21,0.55)] hover:shadow-[0_0_24px_rgba(250,204,21,0.75)] transition-all">
          <Wallet className="w-4 h-4" />
          Wallet Proofs
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card border-yellow-400/40">
        <DialogHeader>
          <DialogTitle>Wallet Proofs</DialogTitle>
        </DialogHeader>
        <div className="rounded-xl overflow-hidden bg-background flex justify-center">
          <img src={images[active]} alt={`Wallet proof ${active + 1}`} className="max-h-[60vh] w-auto object-contain" />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${i === active ? "border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" : "border-border opacity-70 hover:opacity-100"}`}
            >
              <img src={src} alt={`Wallet proof thumbnail ${i + 1}`} className="w-full h-16 object-cover" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletProofsDialog;
