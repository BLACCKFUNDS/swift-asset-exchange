import { Button } from "@/components/ui/button";
import { Blocks, CircleAlert, MonitorPlay } from "lucide-react";

const details = [
  {
    icon: MonitorPlay,
    title: "Interface preview",
    description: "This website demonstrates a crypto-themed interface and illustrative plan details.",
  },
  {
    icon: Blocks,
    title: "No blockchain connection",
    description: "The site does not create, issue, or send genuine crypto assets or blockchain transactions.",
  },
  {
    icon: CircleAlert,
    title: "No real-world value",
    description: "Displayed amounts are simulation figures, not wallet balances, investments, or transferable tokens.",
  },
];

const WhyUs = () => (
  <section id="why-us" className="scroll-mt-20 border-b border-border/70 py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">The essentials</p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">Clear by design.</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Understand what this interface does—and what it does not do—before proceeding.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {details.map(({ icon: Icon, title, description }) => (
          <article key={title} className="border-t border-primary/40 pt-5">
            <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Button variant="flash-outline" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
          View simulation tiers
        </Button>
      </div>
    </div>
  </section>
);

export default WhyUs;