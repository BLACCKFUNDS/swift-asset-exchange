const FlashStats = () => {
  const stats = [
    {
      value: "1000+",
      label: "Bought a Subscription"
    },
    {
      value: "312.4M",
      label: "Total Flash Sent"
    },
    {
      value: "988+",
      label: "Positive Ratings"
    },
    {
      value: "4.4B",
      label: "Total Flash we have))))"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--flash-primary))] mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashStats;