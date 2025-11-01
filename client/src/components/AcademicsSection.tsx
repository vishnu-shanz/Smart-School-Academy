import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Microscope, Palette, Globe } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "English & Literature",
    description: "Comprehensive language arts curriculum fostering critical thinking, creative writing, and literary analysis through classic and contemporary works.",
  },
  {
    icon: Microscope,
    title: "STEM Programs",
    description: "Advanced science, technology, engineering, and mathematics courses with hands-on labs, robotics, and research opportunities.",
  },
  {
    icon: Palette,
    title: "Arts & Music",
    description: "Creative expression through visual arts, performing arts, music theory, and practice with state-of-the-art facilities and equipment.",
  },
  {
    icon: Globe,
    title: "Social Sciences",
    description: "Engaging history, geography, economics, and civics courses that develop global awareness and cultural understanding.",
  },
];

const highlights = [
  { title: "STEM Excellence", description: "Advanced labs & technology" },
  { title: "Arts Integration", description: "Creative expression focus" },
  { title: "Athletics", description: "15+ varsity sports programs" },
  { title: "Global Studies", description: "International partnerships" },
];

export default function AcademicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="academics" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Academic Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to challenge students academically while nurturing
            their individual talents and interests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                data-testid={`program-card-${index}`}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
            Curriculum Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-card-border"
                data-testid={`highlight-${index}`}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
