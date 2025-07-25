import bitcoinBanner from "@/assets/bitcoin-banner.png";

const TopBanner = () => {
  return (
    <div className="w-full bg-crypto-dark/50 border-b border-crypto-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <img 
            src={bitcoinBanner} 
            alt="Bitcoin Cryptocurrency" 
            className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;