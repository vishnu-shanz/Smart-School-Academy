import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import type { FacultyMember } from "@shared/schema";

const defaultFaculty: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. Emily Rodriguez",
    title: "Head of Science Department",
    department: "Science",
    bio: "Dr. Rodriguez brings 15 years of teaching experience and a passion for making science accessible and exciting for all students.",
    qualifications: "Ph.D. in Chemistry, MIT • M.S. in Education",
    imageUrl: "/assets/generated_images/Female_science_teacher_headshot_da22b2cd.png",
  },
  {
    id: "2",
    name: "Prof. James Chen",
    title: "Mathematics Teacher",
    department: "Mathematics",
    bio: "Professor Chen specializes in advanced mathematics and has helped countless students discover the beauty of mathematical thinking.",
    qualifications: "M.S. in Mathematics, Stanford • B.S. in Mathematics Education",
    imageUrl: "/assets/generated_images/Male_math_teacher_headshot_baebc8a9.png",
  },
  {
    id: "3",
    name: "Ms. Margaret Thompson",
    title: "English & Literature",
    department: "English",
    bio: "Ms. Thompson's innovative approach to literature encourages students to find their own voice through creative writing and critical analysis.",
    qualifications: "M.A. in English Literature, Yale • B.A. in Creative Writing",
    imageUrl: "/assets/generated_images/Female_English_teacher_headshot_379f1248.png",
  },
  {
    id: "4",
    name: "Coach Michael Davis",
    title: "Physical Education",
    department: "Athletics",
    bio: "Coach Davis emphasizes the importance of physical fitness, teamwork, and sportsmanship in developing well-rounded students.",
    qualifications: "M.S. in Kinesiology • Certified Athletic Trainer",
    imageUrl: "/assets/generated_images/Male_PE_teacher_headshot_e14c446b.png",
  },
  {
    id: "5",
    name: "Ms. Sofia Martinez",
    title: "Visual Arts Director",
    department: "Arts",
    bio: "Ms. Martinez inspires creativity and artistic expression through diverse mediums and techniques in our award-winning arts program.",
    qualifications: "M.F.A. in Fine Arts, RISD • B.A. in Art Education",
    imageUrl: "/assets/generated_images/Female_art_teacher_headshot_91377a2f.png",
  },
  {
    id: "6",
    name: "Dr. Robert Wilson",
    title: "History Department Chair",
    department: "History",
    bio: "Dr. Wilson brings history to life through engaging storytelling and helps students understand the connections between past and present.",
    qualifications: "Ph.D. in History, Harvard • M.A. in World History",
    imageUrl: "/assets/generated_images/Male_history_teacher_headshot_b9271df5.png",
  },
];

export default function FacultySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: faculty = defaultFaculty, isLoading } = useQuery<FacultyMember[]>({
    queryKey: ["/api/faculty"],
  });

  return (
    <section id="faculty" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated educators are committed to inspiring and empowering every student to reach
            their full potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-96 rounded-lg bg-card border border-card-border animate-pulse" />
            ))
          ) : (
            faculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              data-testid={`faculty-card-${member.id}`}
            >
              <Card
                className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
                onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4 border-4 border-primary/10">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback className="text-2xl">{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{member.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.department}</p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === member.id ? "auto" : 0,
                        opacity: expandedId === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                        <div className="pt-2">
                          <p className="text-xs font-semibold text-foreground mb-1">Qualifications:</p>
                          <p className="text-xs text-muted-foreground">{member.qualifications}</p>
                        </div>
                      </div>
                    </motion.div>

                    {expandedId !== member.id && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{member.bio}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
          )}
        </div>
      </div>
    </section>
  );
}
