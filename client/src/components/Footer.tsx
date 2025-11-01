import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "Admissions", href: "#contact" },
    { label: "Academic Calendar", href: "#events" },
    { label: "Parent Portal", href: "#" },
    { label: "Staff Directory", href: "#faculty" },
  ],
  programs: [
    { label: "Elementary School", href: "#academics" },
    { label: "Middle School", href: "#academics" },
    { label: "High School", href: "#academics" },
    { label: "Summer Programs", href: "#academics" },
  ],
  resources: [
    { label: "About Us", href: "#welcome" },
    { label: "Campus Gallery", href: "#gallery" },
    { label: "News & Events", href: "#events" },
    { label: "Contact Us", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-serif text-primary mb-4">Smart School Academy</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Inspiring minds and building futures through academic excellence and character development.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.href, "_blank")}
                    data-testid={`link-${social.label.toLowerCase()}`}
                    className="hover-elevate active-elevate-2"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="p-0 h-auto text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="p-0 h-auto text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                data-testid="input-newsletter"
                className="flex-1"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
              © 2025 Smart School Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Button
                variant="ghost"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary"
                data-testid="link-privacy"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary"
                data-testid="link-terms"
              >
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
