import { Card, CardContent } from "@/components/ui/card";

const FlashReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Torres",
      username: "@miketorres_crypto",
      rating: 5,
      text: "FlashUSDT is incredible! Got my flash USDT with original hash in minutes. Transaction went through perfectly on my exchange. 100% legit service!",
      amount: "$25,000 USDT",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "@sarahc_trader",
      rating: 5,
      text: "Best flash service I've ever used. The support team is amazing and the hash verification works flawlessly. Made $50K transaction smoothly.",
      amount: "$50,000 USDT",
      verified: true
    },
    {
      id: 3,
      name: "David Rodriguez",
      username: "@davidr_finance",
      rating: 5,
      text: "Professional service with real results. Used FlashUSDT for BEP20 and it passed all exchange verifications. Highly recommended!",
      amount: "$15,000 USDT",
      verified: true
    },
    {
      id: 4,
      name: "Amanda Wilson",
      username: "@amanda_crypto",
      rating: 5,
      text: "Exceptional quality! The flash USDT has original blockchain hash and works perfectly. Customer support responds within minutes.",
      amount: "$35,000 USDT",
      verified: true
    },
    {
      id: 5,
      name: "James Parker",
      username: "@jamesparker_btc",
      rating: 5,
      text: "Delivered exactly as promised. The flash USDT passed all exchange checks and the hash verification is authentic. 5 stars!",
      amount: "$40,000 USDT",
      verified: true
    },
    {
      id: 6,
      name: "Lisa Martinez",
      username: "@lisa_defi",
      rating: 5,
      text: "Outstanding service! Used for TRC20 flash and it worked perfectly on multiple exchanges. The original hash feature is game-changing.",
      amount: "$20,000 USDT",
      verified: true
    },
    {
      id: 7,
      name: "Robert Kim",
      username: "@robert_blockchain",
      rating: 5,
      text: "Fast, reliable, and authentic. FlashUSDT provides real value with their original hash technology. Best investment I made!",
      amount: "$30,000 USDT",
      verified: true
    },
    {
      id: 8,
      name: "Jennifer Adams",
      username: "@jenny_trader",
      rating: 5,
      text: "Incredible results! The flash USDT works exactly as described. Original hash verification passed on all platforms I tested.",
      amount: "$45,000 USDT",
      verified: true
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-muted-foreground mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Reviews
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thanks to us, many of our clients have made their dreams come true!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-[hsl(var(--flash-border))] bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[hsl(var(--flash-primary))] rounded-full flex items-center justify-center text-[hsl(var(--flash-primary-foreground))] font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.username}</p>
                  </div>
                  {review.verified && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 bg-[hsl(var(--flash-primary))] rounded-full flex items-center justify-center">
                        <span className="text-[hsl(var(--flash-primary-foreground))] text-xs">✓</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[hsl(var(--flash-primary))] text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="bg-[hsl(var(--flash-primary))]/10 rounded-lg p-3 border border-[hsl(var(--flash-primary))]/20">
                  <p className="text-sm font-semibold text-[hsl(var(--flash-primary))]">
                    Transaction: {review.amount}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashReviews;