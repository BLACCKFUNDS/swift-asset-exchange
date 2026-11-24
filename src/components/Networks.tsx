const ITEMS = [
  { t: "TRC20", d: "Token standard on the Tron network. Known for low fees." },
  { t: "BEP20", d: "Token standard on BNB Smart Chain. Works like ERC20, with lower fees." },
  { t: "ERC20", d: "The original Ethereum token standard. Very widely supported, but fees vary." },
];
const Networks = () => (
  <section id="networks" className="py-20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Understanding Networks</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {ITEMS.map((i) => (
          <div key={i.t} className="card-elevated p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">{i.t}</h3>
            <p className="text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Networks;
