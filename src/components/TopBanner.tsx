import { X } from "lucide-react";
import { useState } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[hsl(var(--flash-primary))] text-[hsl(var(--flash-primary-foreground))] py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-sm font-medium">
        <span className="flex items-center gap-2">
          ✨ New: Our Flash USDT now have the original HASH
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;