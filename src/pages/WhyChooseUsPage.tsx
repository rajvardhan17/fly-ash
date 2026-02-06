import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/common/FeatureCard";
import { 
  Leaf, 
  Shield, 
  Award, 
  Truck, 
  Clock, 
  BadgeCheck,
  Banknote,
  Users,
  Wrench
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Superior Quality",
    description: "Every brick undergoes rigorous quality testing in our in-house laboratory. We maintain consistent quality across all production batches.",
  },
  {
    icon: Award,
    title: "IS Standards Compliant",
    description: "All products meet Bureau of Indian Standards (IS 12894:2002) specifications. ISO 9001:2015 certified manufacturing process.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Production",
    description: "Our bricks are made from recycled fly ash, reducing environmental pollution and conserving natural clay resources.",
  },
  {
    icon: Truck,
    title: "Reliable Bulk Supply",
    description: "With 5000+ daily production capacity, we ensure timely delivery of bulk orders. Pan-India logistics network.",
  },
  {
    icon: Banknote,
    title: "Competitive Pricing",
    description: "Direct factory pricing with no middlemen. Volume discounts available for large orders. Best value for money.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed delivery schedules with real-time tracking. Our logistics team ensures your project stays on schedule.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guarantee",
    description: "100% quality assurance on all products. We replace any defective bricks without questions asked.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated account managers for bulk clients. Technical support for construction queries and specifications.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Special size requirements? We offer customized brick sizes for specific project needs on bulk orders.",
  },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "IS 12894:2002 Compliant",
  "Bureau of Indian Standards",
  "Green Building Certified",
];

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Why Choose Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted Partner in Construction
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Experience the difference with EcoAsh Bricks. Quality, reliability, and 
              sustainability in every brick we manufacture.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-accent-foreground">
                <Award className="h-5 w-5" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Strengths"
            title="What Sets Us Apart"
            description="We combine traditional craftsmanship with modern technology to deliver the best quality fly ash bricks."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
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

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {/*<div className="p-8">
              <div className="font-heading text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>*/}
            <div className="p-8">
              <div className="font-heading text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-8">
              <div className="font-heading text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Daily Production</div>
            </div>
            <div className="p-8">
              <div className="font-heading text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
