const facts = [
  { value: "None", label: "Assets created" },
  { value: "None", label: "Blockchain transfers" },
  { value: "Unavailable", label: "Payment verification" },
  { value: "Local only", label: "Receipt handling" },
];

const FlashStats = () => (
  <section className="border-b border-border/70 bg-card/40 py-12 md:py-16" aria-label="Simulation limitations">
    <div className="container mx-auto grid grid-cols-2 gap-x-6 gap-y-8 px-4 md:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label} className="border-l border-primary/40 pl-4">
          <p className="text-xl font-semibold text-primary md:text-2xl">{fact.value}</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground md:text-sm">{fact.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FlashStats;