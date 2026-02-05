import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle, Users, Award, Factory, Target, Eye } from "lucide-react";
import bricksImage from "@/assets/fly-ash-bricks.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

const stats = [
  { value: "5+", label: "Happy Clients" },
  { value: "5000+", label: "Daily Capacity" },
  { value: "10+", label: "Projects" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide high-quality, eco-friendly construction materials that contribute to sustainable development while maintaining the highest standards of quality and customer satisfaction.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become India's leading manufacturer of sustainable construction materials, setting industry benchmarks for quality, innovation, and environmental responsibility.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Trust
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Jayraj Building Materials Pvt. Ltd. is a pioneer in eco-friendly construction materials, 
              committed to sustainable manufacturing and quality excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                badge="Our Story"
                title="From Vision to Industry Leadership"
                align="left"
              />
              
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded in 2025, Jayraj Building Materials Pvt. Ltd. began with a simple yet powerful vision: 
                  to transform industrial waste into valuable construction materials while reducing 
                  environmental impact.
                </p>
                <p>
                  What started as a small manufacturing unit has grown into one of the region's 
                  most trusted suppliers of fly ash bricks. Our journey is marked by continuous 
                  innovation, unwavering commitment to quality, and a deep respect for the environment.
                </p>
                <p>
                  Today, we serve over 500 clients including major builders, contractors, and 
                  government agencies across India. Our state-of-the-art facility produces over 
                  5000 bricks daily, meeting the growing demand for sustainable construction materials.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Factory className="h-6 w-6 text-primary" />
                  <span className="font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="font-medium">BIS Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">Experienced Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Quality Assured</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroFactory} 
                alt="EcoAsh Bricks Manufacturing Facility" 
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Purpose"
            title="Mission & Vision"
            description="Guided by our commitment to sustainability and excellence"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capacity */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={bricksImage} 
                alt="Quality Fly Ash Bricks" 
                className="rounded-2xl shadow-elevated"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionHeader
                badge="Manufacturing Excellence"
                title="State-of-the-Art Production Facility"
                align="left"
              />
              
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Our manufacturing facility is equipped with the latest technology and 
                  automated production lines to ensure consistent quality and high efficiency.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Fully automated brick pressing machines",
                  "Advanced curing chambers for optimal strength",
                  "In-house quality testing laboratory",
                  "Computerized batch mixing systems",
                  "Eco-friendly dust collection systems",
                  "5000+ daily production capacity",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
