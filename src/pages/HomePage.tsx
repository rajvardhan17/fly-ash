import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/common/FeatureCard";
import { 
  Leaf, 
  Shield, 
  Award, 
  Truck, 
  Phone, 
  ArrowRight, 
  Building2, 
  Factory, 
  HardHat,
  CheckCircle,
  Droplets,
  Weight,
  Ruler
} from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";
import bricksImage from "@/assets/fly-ash-bricks.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const highlights = [
  { icon: Leaf, title: "Eco-Friendly", description: "Made from industrial waste" },
  { icon: Shield, title: "High Strength", description: "Superior compressive strength" },
  { icon: Award, title: "IS Compliant", description: "Bureau of Indian Standards" },
  { icon: Truck, title: "Bulk Supply", description: "Pan-India delivery" },
];

const features = [
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description: "Our fly ash bricks are manufactured using thermal power plant waste, reducing environmental pollution and conserving natural resources.",
  },
  {
    icon: Shield,
    title: "Superior Quality",
    description: "Every brick undergoes rigorous quality testing to ensure consistent strength, durability, and performance in all weather conditions.",
  },
  {
    icon: Award,
    title: "IS Standards Compliant",
    description: "All our products meet Bureau of Indian Standards specifications, ensuring reliability for residential and commercial construction.",
  },
  {
    icon: Truck,
    title: "Reliable Bulk Supply",
    description: "With manufacturing capacity of 5,000 bricks per day, we ensure timely delivery of bulk orders across India.",
  },
];

const specifications = [
  { icon: Ruler, label: "Size", value: "230 × 110 × 75 mm" },
  { icon: Weight, label: "Compressive Strength", value: "7.5 - 10 N/mm²" },
  { icon: Droplets, label: "Water Absorption", value: "< 12%" },
];

const applications = [
  { icon: Building2, title: "Residential", description: "Houses, apartments, villas" },
  { icon: Factory, title: "Commercial", description: "Offices, malls, showrooms" },
  { icon: HardHat, title: "Industrial", description: "Factories, warehouses" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="EcoAsh Bricks Manufacturing Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary-foreground border border-primary-foreground/20 animate-fade-in">
              <Leaf className="h-4 w-4" />
              Eco-Friendly Construction Materials
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Building a Greener Future with{" "}
              <span className="text-accent">Fly Ash Bricks</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Premium quality fly ash bricks manufactured with cutting-edge technology. 
              Stronger, lighter, and more sustainable than traditional red bricks.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="heroAccent" size="lg" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+919009872338">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-center gap-4 text-primary-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img 
                src={bricksImage} 
                alt="High Quality Fly Ash Bricks" 
                className="rounded-2xl shadow-elevated"
              />
              {/*<div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-earth hidden md:block">
                <div className="text-4xl font-heading font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>*/}
            </div>
            
            <div>
              <SectionHeader
                badge="About EcoAsh Bricks"
                title="Leading Fly Ash Brick Manufacturer in India"
                description="With over 15 years of experience, we are committed to providing high-quality, eco-friendly construction materials that meet the demands of modern building requirements."
                align="left"
              />
              
              <ul className="mt-8 space-y-4">
                {[
                  "ISO 9001:2015 Certified Manufacturing",
                  "50,000+ Bricks Daily Production Capacity",
                  "Pan-India Delivery Network",
                  "Trusted by 500+ Builders & Contractors",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-8" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Products"
            title="Premium Fly Ash Bricks"
            description="Engineered for strength, designed for sustainability. Our fly ash bricks offer superior performance compared to traditional clay bricks."
          />
          
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Technical Specifications
                </h3>
                <div className="space-y-6">
                  {specifications.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between pb-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <spec.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-foreground">{spec.label}</span>
                      </div>
                      <span className="text-primary font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Why Choose Fly Ash Bricks?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 30% lighter than clay bricks</li>
                    <li>• Better thermal insulation</li>
                    <li>• Uniform size and shape</li>
                    <li>• Lower water absorption</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={constructionImage} 
                alt="Construction with Fly Ash Bricks" 
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            title="Your Trusted Partner in Construction"
            description="We combine eco-friendly manufacturing with uncompromising quality to deliver the best fly ash bricks for your projects."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Applications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for Every Project
            </h2>
            <p className="text-lg text-primary-foreground/80">
              From residential homes to large-scale industrial complexes, our fly ash bricks deliver consistent quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="bg-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-colors">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 mx-auto mb-6">
                  <app.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-primary-foreground/70">{app.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/applications">
                Explore Applications
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build with Quality?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get a free quote for your construction project. Our team is ready to help you with bulk orders and competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroAccent" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+919009872338">
                  <Phone className="h-5 w-5" />
                  +91 9009872338
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
