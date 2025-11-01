import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/School_campus_hero_image_e7ea8f81.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 sm:mb-6 leading-tight"
        >
          Inspiring Minds,
          <br />
          Building Futures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Smart School Academy is a premier educational institution committed to academic excellence,
          character development, and inspiring lifelong learners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            data-testid="button-schedule-visit"
            className="w-full sm:w-auto bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6"
          >
            Schedule a Visit
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("academics")}
            data-testid="button-explore-academics"
            className="w-full sm:w-auto text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6"
          >
            Explore Academics
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("welcome")}
        >
          <ChevronDown className="w-8 h-8 text-white/80" data-testid="icon-scroll-indicator" />
        </motion.div>
      </motion.div>
    </section>
  );
}
