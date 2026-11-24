import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
}

const CryptoTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: "USDT", price: 1.00, change24h: 0.01 },
    { symbol: "BTC", price: 43250.00, change24h: 2.34 },
    { symbol: "ETH", price: 2580.50, change24h: -1.23 },
    { symbol: "BNB", price: 315.80, change24h: 1.85 },
    { symbol: "SOL", price: 98.45, change24h: 3.21 },
    { symbol: "TON", price: 2.34, change24h: -0.67 }
  ]);

  useEffect(() => {
    // Simulate live price updates
    const interval = setInterval(() => {
      setPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price * (1 + (Math.random() - 0.5) * 0.002),
        change24h: crypto.change24h + (Math.random() - 0.5) * 0.5
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-crypto-card/30 border-t border-b border-crypto-border overflow-hidden">
      <div className="flex animate-[scroll_30s_linear_infinite] space-x-8 py-3">
        {[...prices, ...prices].map((crypto, index) => (
          <div key={`${crypto.symbol}-${index}`} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="font-semibold text-crypto-primary">{crypto.symbol}</span>
            <span className="text-foreground">${crypto.price.toFixed(crypto.symbol === 'USDT' ? 4 : 2)}</span>
            <div className={`flex items-center ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {crypto.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span className="text-xs ml-1">{crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;