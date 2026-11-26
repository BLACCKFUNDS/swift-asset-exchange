import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import binance from "@/assets/binance_video_proof.mp4.asset.json";
import mexc from "@/assets/mexc_video_proof.mp4.asset.json";

const videos = [
  { title: "Flash USDT Proof", src: "/video-proof.mp4" },
  { title: "Binance Proof", src: binance.url },
  { title: "MEXC Proof", src: mexc.url },
];

const VideoProofsDialog = () => {
  const [active, setActive] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="gap-2 rounded-xl font-bold border-2 border-yellow-400 text-foreground shadow-[0_0_16px_rgba(250,204,21,0.55)] hover:shadow-[0_0_24px_rgba(250,204,21,0.75)] transition-all">
          <Play className="w-4 h-4" />
          Video Proofs
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card border-[hsl(var(--flash-primary))]/40">
        <DialogHeader>
          <DialogTitle>Video Proofs</DialogTitle>
        </DialogHeader>
        <div className="rounded-xl overflow-hidden bg-background">
          <video key={videos[active].src} src={videos[active].src} controls autoPlay playsInline className="w-full max-h-[60vh]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {videos.map((v, i) => (
            <button
              key={v.src}
              onClick={() => setActive(i)}
              className={`rounded-lg overflow-hidden border-2 text-left transition-all ${i === active ? "border-[hsl(var(--flash-primary))] shadow-[0_0_12px_hsl(var(--flash-primary)/0.5)]" : "border-border opacity-70 hover:opacity-100"}`}
            >
              <div className="relative">
                <video src={`${v.src}#t=0.5`} muted preload="metadata" playsInline className="w-full h-20 object-cover pointer-events-none" />
                <Play className="absolute inset-0 m-auto w-6 h-6 text-foreground" />
              </div>
              <p className="text-xs font-semibold p-2">{v.title}</p>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoProofsDialog;
