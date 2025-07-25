import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      number: "1000+",
      label: "Bought a Subscription",
      description: "Active subscribers"
    },
    {
      number: "312.4M",
      label: "Total Flash Sent",
      description: "USDT generated"
    },
    {
      number: "988+",
      label: "Positive Ratings",
      description: "Satisfied customers"
    },
    {
      number: "4.4B",
      label: "Total Flash we have",
      description: "Available instantly"
    }
  ];

  return (
    <section className="py-20 bg-crypto-dark/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-crypto-border bg-crypto-card/50 backdrop-blur-sm hover:border-crypto-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;