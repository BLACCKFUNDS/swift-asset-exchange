import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-crypto-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-transparent bg-gradient-to-r from-crypto-primary to-crypto-glow bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us at any time via Telegram, WhatsApp for assistance from our administrators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-crypto-border bg-crypto-card/50 backdrop-blur-sm hover:border-crypto-primary/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full mb-4 w-fit bg-gradient-to-r from-crypto-primary to-crypto-glow text-crypto-dark">
                <MessageCircle className="w-6 h-6" />
              </div>
              <CardTitle>Telegram</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Join our official channel for updates and support</p>
              <Button 
                variant="crypto" 
                className="w-full"
                onClick={() => window.open('https://t.me/cryptoflasha', '_blank')}
              >
                @cryptoflasha
              </Button>
            </CardContent>
          </Card>

          <Card className="border-crypto-border bg-crypto-card/50 backdrop-blur-sm hover:border-crypto-primary/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full mb-4 w-fit bg-gradient-to-r from-crypto-primary to-crypto-glow text-crypto-dark">
                <Phone className="w-6 h-6" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Direct messaging for immediate assistance</p>
              <Button 
                variant="crypto" 
                className="w-full"
                onClick={() => window.open('https://wa.me/84813504458', '_blank')}
              >
                +84813504458
              </Button>
            </CardContent>
          </Card>

          <Card className="border-crypto-border bg-crypto-card/50 backdrop-blur-sm hover:border-crypto-primary/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full mb-4 w-fit bg-gradient-to-r from-crypto-primary to-crypto-glow text-crypto-dark">
                <Clock className="w-6 h-6" />
              </div>
              <CardTitle>Support Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">We're here to help you anytime</p>
              <div className="text-crypto-primary font-semibold text-lg">
                24/7 Available
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-crypto-card/50 rounded-full border border-crypto-border">
            <Mail className="w-5 h-5 text-crypto-primary" />
            <span className="text-sm text-muted-foreground">Email support also available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;