import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, CheckCircle, Ruler, Weight, Droplets, Thermometer, Box, Layers } from "lucide-react";
import bricksImage from "@/assets/fly-ash-bricks.jpg";

const specifications = [
  { icon: Ruler, label: "Size", value: "230 × 110 × 75 mm", detail: "Standard IS size" },
  { icon: Weight, label: "Compressive Strength", value: "7.5 - 10 N/mm²", detail: "Higher than clay bricks" },
  { icon: Droplets, label: "Water Absorption", value: "< 12%", detail: "Low absorption rate" },
  { icon: Box, label: "Weight", value: "2.8 - 3.2 kg", detail: "30% lighter than clay" },
  { icon: Thermometer, label: "Thermal Conductivity", value: "0.90 - 1.05 W/m²K", detail: "Better insulation" },
  { icon: Layers, label: "Density", value: "1700 - 1850 kg/m³", detail: "Uniform density" },
];

const comparison = [
  { property: "Compressive Strength", flyAsh: "7.5 - 10 N/mm²", redBrick: "3.5 - 5 N/mm²" },
  { property: "Water Absorption", flyAsh: "< 12%", redBrick: "15 - 25%" },
  { property: "Size Uniformity", flyAsh: "Excellent", redBrick: "Variable" },
  { property: "Surface Finish", flyAsh: "Smooth", redBrick: "Rough" },
  { property: "Plastering Required", flyAsh: "Less", redBrick: "More" },
  { property: "Mortar Consumption", flyAsh: "Less", redBrick: "More" },
  { property: "Environmental Impact", flyAsh: "Eco-friendly", redBrick: "High (soil erosion)" },
  { property: "Curing Period", flyAsh: "21-28 days", redBrick: "Not required" },
];

const advantages = [
  "Higher strength-to-weight ratio",
  "Uniform size and shape",
  "Better thermal insulation",
  "Reduced construction cost",
  "Faster construction time",
  "Eco-friendly and sustainable",
  "Lower water absorption",
  "No efflorescence",
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Our Products
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Fly Ash Bricks
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Engineered for superior strength, designed for sustainable construction. 
              Our fly ash bricks meet the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img 
                src={bricksImage} 
                alt="Premium Fly Ash Bricks" 
                className="rounded-2xl shadow-elevated"
              />
            </div>
            
            <div>
              <SectionHeader
                badge="Product Details"
                title="Fly Ash Bricks"
                description="High-quality fly ash bricks manufactured from thermal power plant waste, offering superior performance for all construction needs."
                align="left"
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground">
                  Our fly ash bricks are manufactured using a precise mix of fly ash, cement, sand, 
                  and water. The automated pressing and controlled curing process ensures consistent 
                  quality and strength in every brick.
                </p>
                <p className="text-muted-foreground">
                  Ideal for load-bearing and non-load-bearing walls in residential, commercial, 
                  and industrial construction projects.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919876543210">Call for Bulk Orders</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Specifications"
            title="Technical Specifications"
            description="Our fly ash bricks are manufactured to meet IS 12894:2002 standards"
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec) => (
              <div key={spec.label} className="bg-card rounded-xl p-6 border border-border shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{spec.label}</h3>
                    <p className="text-sm text-muted-foreground">{spec.detail}</p>
                  </div>
                </div>
                <div className="text-2xl font-heading font-bold text-primary">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Comparison"
            title="Fly Ash Bricks vs Red Bricks"
            description="See why fly ash bricks are the superior choice for modern construction"
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-card rounded-xl border border-border overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Property</th>
                  <th className="px-6 py-4 text-left font-semibold">Fly Ash Bricks</th>
                  <th className="px-6 py-4 text-left font-semibold">Red Bricks</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.property} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.property}</td>
                    <td className="px-6 py-4 text-primary font-medium">{row.flyAsh}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.redBrick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Advantages of Fly Ash Bricks
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage} className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us for bulk orders, competitive pricing, and reliable delivery across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Request Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+919009872338">+91 9009872338</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
