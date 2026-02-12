import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroFactory from "@/assets/hero-factory.jpg";

const steps = [
  {
    number: "01",
    title: "Raw Material Collection",
    description: "We source high-quality fly ash from thermal power plants and other raw materials like cement, sand, and lime from certified suppliers.",
    details: [
      "Fly ash from thermal power plants",
      "High-grade Portland cement",
      "Graded sand and aggregates",
      "Quality lime for binding",
    ],
  },
  {
    number: "02",
    title: "Material Testing & Mixing",
    description: "Raw materials undergo rigorous quality testing before being precisely mixed in computerized batching plants for optimal consistency.",
    details: [
      "Laboratory testing of raw materials",
      "Precise computerized mixing",
      "Optimal water-cement ratio",
      "Consistent batch quality",
    ],
  },
  {
    number: "03",
    title: "Brick Pressing",
    description: "The mixed material is fed into high-pressure hydraulic pressing machines that form uniform, dense bricks with smooth surfaces.",
    details: [
      "High-pressure hydraulic pressing",
      "Uniform size and shape",
      "Smooth surface finish",
      "Optimal density achieved",
    ],
  },
  {
    number: "04",
    title: "Curing Process",
    description: "Freshly pressed bricks are cured in controlled environments for 21-28 days to achieve maximum strength and durability.",
    details: [
      "21-28 days curing period",
      "Controlled humidity levels",
      "Water spray curing",
      "Strength development monitoring",
    ],
  },
  {
    number: "05",
    title: "Quality Control",
    description: "Every batch undergoes comprehensive testing for compressive strength, water absorption, and dimensional accuracy.",
    details: [
      "Compressive strength testing",
      "Water absorption testing",
      "Dimensional accuracy check",
      "Visual inspection",
    ],
  },
  {
    number: "06",
    title: "Packaging & Dispatch",
    description: "Quality-approved bricks are carefully stacked, loaded, and dispatched to construction sites across India.",
    details: [
      "Careful handling and stacking",
      "Efficient loading systems",
      "Pan-India delivery network",
      "Real-time tracking available",
    ],
  },
];

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Manufacturing Process
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Make Quality Bricks
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our state-of-the-art manufacturing process ensures every brick meets 
              the highest standards of quality and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={heroFactory} 
              alt="Manufacturing Facility" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-2">
                State-of-the-Art Facility
              </h3>
              <p className="text-primary-foreground/80">
                5000+ bricks daily production capacity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Steps */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Step by Step"
            title="Our Manufacturing Process"
            description="From raw materials to finished products - every step is carefully controlled"
          />
          
          <div className="mt-16 space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading text-xl font-bold">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`bg-muted/50 rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="font-heading text-6xl font-bold text-primary/30">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
