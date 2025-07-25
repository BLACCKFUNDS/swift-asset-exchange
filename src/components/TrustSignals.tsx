import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle, Award } from "lucide-react";

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SSL Secured",
      description: "256-bit encryption"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Verified Service",
      description: "Original HASH contracts"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "#1 Rated",
      description: "Best in market"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Always available"
    }
  ];

  return (
    <section className="py-16 bg-crypto-dark/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-crypto-primary border-crypto-primary/20">
            Trusted by Thousands
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">CryptoFlash</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => (
            <Card key={index} className="border-crypto-border bg-crypto-card/30 backdrop-blur-sm text-center hover:border-crypto-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 rounded-full mb-2 w-fit bg-crypto-primary/10 text-crypto-primary">
                  {metric.icon}
                </div>
                <CardTitle className="text-lg">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-crypto-card/50 rounded-full border border-crypto-border">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm text-muted-foreground">Trusted by 1000+ customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;