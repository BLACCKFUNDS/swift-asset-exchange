import { Card, CardContent } from "@/components/ui/card";

const FlashReviews = () => {
  // Sample review images - in a real implementation, these would be actual review screenshots
  const reviews = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Customer review ${i + 1}`,
    // Using placeholder images that would represent customer reviews
    src: `https://images.unsplash.com/photo-${1500 + i}x400-${600 + i * 10}/600x400?q=80`
  }));

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <Card key={review.id} className="border-[hsl(var(--flash-border))] bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-sm text-center p-4">
                    Customer Review Screenshot
                    <br />
                    #{review.id}
                  </div>
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