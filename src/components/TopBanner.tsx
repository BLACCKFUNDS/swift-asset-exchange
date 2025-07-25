import bitcoinBanner from "@/assets/bitcoin-banner.png";

const TopBanner = () => {
  return (
    <div className="w-full bg-crypto-dark/50 border-b border-crypto-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">
              #1 Crypto Flash Generator
            </span>
          </h1>
          <img 
            src={bitcoinBanner} 
            alt="Bitcoin Cryptocurrency" 
            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;