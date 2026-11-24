import { useEffect, useState } from "react";

const COINS = [
  { id: "bitcoin", sym: "BTC", name: "Bitcoin" },
  { id: "ethereum", sym: "ETH", name: "Ethereum" },
  { id: "binancecoin", sym: "BNB", name: "BNB" },
  { id: "solana", sym: "SOL", name: "Solana" },
  { id: "the-open-network", sym: "TON", name: "Toncoin" },
  { id: "tether", sym: "USDT", name: "Tether" },
];
type Q = Record<string, { usd: number; usd_24h_change: number }>;

const LivePrices = () => {
  const [data, setData] = useState<Q | null>(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const load = () =>
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${COINS.map((c) => c.id).join(",")}&vs_currencies=usd&include_24hr_change=true`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((d) => { setData(d); setErr(false); })
        .catch(() => setErr(true));
    load();
    const t = setInterval(load, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="prices" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Live Prices</h2>
        <p className="text-center text-muted-foreground mb-12">Updated every minute from CoinGecko.</p>
        {err && !data && <p className="text-center text-muted-foreground">Prices are unavailable right now. Please try again later.</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COINS.map((c) => {
            const q = data?.[c.id];
            const up = (q?.usd_24h_change ?? 0) >= 0;
            return (
              <div key={c.id} className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-xs rounded-md bg-primary/15 text-primary px-2 py-1">{c.sym}</span>
                </div>
                <div className="text-3xl font-bold">
                  {q ? `$${q.usd.toLocaleString(undefined, { maximumFractionDigits: q.usd < 10 ? 4 : 2 })}` : "—"}
                </div>
                <div className={`text-sm mt-2 ${up ? "text-success" : "text-destructive"}`}>
                  {q ? `${up ? "+" : ""}${q.usd_24h_change.toFixed(2)}% (24h)` : "Loading…"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default LivePrices;
