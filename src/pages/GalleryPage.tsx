import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import heroFactory from "@/assets/hero-factory.jpg";
import bricksImage from "@/assets/fly-ash-bricks.jpg";
import constructionImage from "@/assets/construction-site.jpg";

const categories = ["All", "Factory", "Products", "Projects"];

const galleryItems = [
  { id: 1, src: heroFactory, category: "Factory", title: "Manufacturing Facility" },
  { id: 2, src: bricksImage, category: "Products", title: "Quality Fly Ash Bricks" },
  { id: 3, src: constructionImage, category: "Projects", title: "Construction Site" },
  { id: 4, src: heroFactory, category: "Factory", title: "Production Line" },
  { id: 5, src: bricksImage, category: "Products", title: "Brick Stack" },
  { id: 6, src: constructionImage, category: "Projects", title: "Building Project" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Work in Pictures
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our manufacturing facility, products, and completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm text-primary-foreground/70">{item.category}</span>
                  <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground bg-gradient-to-t from-foreground/80 to-transparent rounded-b-2xl">
              <span className="text-sm text-primary-foreground/70">{selectedImage.category}</span>
              <h3 className="font-heading text-2xl font-bold">{selectedImage.title}</h3>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-foreground/50 text-primary-foreground flex items-center justify-center hover:bg-foreground/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
