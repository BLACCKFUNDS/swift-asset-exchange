import { CircleOff, Eye, ShieldAlert } from "lucide-react";

const notices = [
  {
    icon: CircleOff,
    title: "No genuine crypto",
    text: "No real token is minted, credited to a wallet, or made available to trade.",
  },
  {
    icon: Eye,
    title: "Illustrative amounts",
    text: "Any quantities shown on this page are examples inside a visual simulation.",
  },
  {
    icon: ShieldAlert,
    title: "No payment processing",
    text: "This website cannot verify a payment, upload a receipt, or confirm an order.",
  },
];

const FlashReviews = () => (
  <section id="reviews" className="scroll-mt-20 border-b border-border/70 py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Before you continue</p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">A clear distinction.</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          We don’t publish invented customer reviews, transaction totals, or verification claims.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {notices.map(({ icon: Icon, title, text }) => (
          <article key={title} className="border-t border-border pt-5">
            <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FlashReviews;