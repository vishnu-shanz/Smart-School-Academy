import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Students Enrolled", value: 850, suffix: "+" },
  { icon: GraduationCap, label: "Faculty Members", value: 65, suffix: "+" },
  { icon: Award, label: "Years of Excellence", value: 45, suffix: "" },
  { icon: TrendingUp, label: "College Acceptance", value: 98, suffix: "%" },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-primary" data-testid={`stat-value-${label.toLowerCase().replace(/\s/g, "-")}`}>
      {count}{suffix}
    </div>
  );
}

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="welcome" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-6">
              Welcome to Smart School Academy
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dear Parents and Students,
              </p>
              <p>
                It is my privilege to welcome you to Smart School Academy, where we believe that every
                student has the potential to achieve greatness. Our dedicated faculty and staff work
                tirelessly to create an environment that nurtures academic excellence, fosters
                creativity, and builds character.
              </p>
              <p>
                We are committed to providing a comprehensive education that prepares our students not
                just for college, but for life. Through rigorous academics, diverse extracurricular
                opportunities, and a supportive community, we empower our students to become confident,
                compassionate, and capable leaders of tomorrow.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Dr. Aarti Raman</p>
                <p className="text-sm text-muted-foreground">Principal, Smart School Academy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-card border border-card-border hover-elevate"
                    data-testid={`stat-card-${index}`}
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" data-testid={`stat-icon-${index}`} />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                    <div className="text-sm text-muted-foreground mt-2" data-testid={`stat-label-${index}`}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
