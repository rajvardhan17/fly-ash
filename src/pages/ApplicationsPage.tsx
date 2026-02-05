import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, Building2, Factory, HardHat, Landmark, Home, Hotel } from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";

const applications = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Perfect for building homes, apartments, and villas. Provides excellent thermal insulation and reduces construction costs.",
    examples: ["Individual houses", "Apartment complexes", "Villas and bungalows", "Housing societies"],
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Ideal for offices, malls, and commercial complexes. Offers uniform appearance and faster construction time.",
    examples: ["Office buildings", "Shopping malls", "Showrooms", "Hotels"],
  },
  {
    icon: Factory,
    title: "Industrial Structures",
    description: "Suitable for factories, warehouses, and industrial facilities. High strength and durability for heavy-duty applications.",
    examples: ["Factories", "Warehouses", "Storage facilities", "Manufacturing units"],
  },
  {
    icon: Landmark,
    title: "Government Projects",
    description: "Approved for government construction projects. Meets all BIS standards and green building requirements.",
    examples: ["Schools and colleges", "Hospitals", "Government offices", "Public infrastructure"],
  },
  {
    icon: HardHat,
    title: "Infrastructure",
    description: "Used in boundary walls, compound walls, and various infrastructure projects requiring durable construction.",
    examples: ["Boundary walls", "Compound walls", "Retaining walls", "Partition walls"],
  },
  {
    icon: Hotel,
    title: "Institutional Buildings",
    description: "Suitable for educational institutions, hospitals, and other institutional buildings requiring quality construction.",
    examples: ["Educational institutes", "Healthcare facilities", "Religious buildings", "Community centers"],
  },
];

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Applications
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Built for Every Project
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our fly ash bricks are versatile and suitable for a wide range of 
              construction applications across residential, commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <img 
            src={constructionImage} 
            alt="Construction Application" 
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Use Cases"
            title="Where Our Bricks Excel"
            description="From homes to high-rises, our fly ash bricks deliver consistent quality"
          />
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <app.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {app.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {app.description}
                </p>
                <ul className="space-y-2">
                  {app.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us to discuss your construction requirements. We offer bulk supply 
            with competitive pricing for all project sizes.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
