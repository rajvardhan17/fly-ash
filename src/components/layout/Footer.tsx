import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Manufacturing Process", href: "/manufacturing" },
    { name: "Gallery", href: "/gallery" },
  ],
  products: [
    { name: "Fly Ash Bricks", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Technical Specs", href: "/products#specs" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Get Quote", href: "/contact#quote" },
    { name: "Admin Login", href: "/admin" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sidebar-primary">
                <span className="font-heading text-xl font-bold text-sidebar-primary-foreground">JBM</span>
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold text-sidebar-foreground">
                  Jayraj Building Materials
                </h2>
                <p className="text-xs text-sidebar-foreground/70">Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-sidebar-foreground/80 text-sm mb-6">
              Leading manufacturer of eco-friendly fly ash bricks, committed to sustainable construction and quality excellence since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-sidebar-primary transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-sidebar-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-heading font-semibold text-sidebar-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-semibold text-sidebar-foreground mb-4 mt-8">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-sidebar-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sidebar-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-sidebar-foreground/80">
                  Village Bistan, Khargone,<br />
                  Madhya Pradesh  - 451441, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sidebar-primary flex-shrink-0" />
                <a href="tel:+919009872338" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-primary">
                  +91 90098 72338
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sidebar-primary flex-shrink-0" />
                <a href="mailto:info@ecoashbricks.com" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-primary">
                  info@ecoashbricks.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-sidebar-primary flex-shrink-0" />
                <a href="https://wa.me/919009872338" className="text-sm text-sidebar-foreground/80 hover:text-sidebar-primary">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sidebar-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sidebar-foreground/60">
              © 2026 Jayraj Building Materials Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-sidebar-foreground/60 hover:text-sidebar-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-sidebar-foreground/60 hover:text-sidebar-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
