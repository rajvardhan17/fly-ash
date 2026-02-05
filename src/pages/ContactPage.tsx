import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ecoashbricks.com", "sales@ecoashbricks.com"],
    action: "mailto:info@ecoashbricks.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Industrial Area, Phase II", "New Delhi - 110020, India"],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("inquiries").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) throw error;

      toast({
        title: "Inquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions or need a quote? We're here to help. Reach out to 
              our team and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-xl p-6 border border-border shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="quote" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader
                badge="Send Message"
                title="Request a Quote"
                description="Fill out the form below and our team will get back to you with a competitive quote."
                align="left"
              />
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Industrial Area, Phase II<br />
                    New Delhi - 110020, India
                  </p>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="h-8 w-8" />
                  <h3 className="font-heading text-xl font-bold">Quick Response on WhatsApp</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Need a quick response? Chat with us on WhatsApp for instant quotes and inquiries.
                </p>
                <Button variant="heroOutline" asChild>
                  <a 
                    href="https://wa.me/919876543210?text=Hello!%20I%27m%20interested%20in%20your%20fly%20ash%20bricks." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
