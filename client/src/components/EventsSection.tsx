import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";
import { format } from "date-fns";

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Open House",
  description: "Join us for a comprehensive tour of our campus, meet our faculty, and learn about our programs. This is a perfect opportunity for prospective families to experience Smart School Academy firsthand.",
    date: new Date("2025-11-15T10:00:00"),
    time: "10:00 AM - 2:00 PM",
    location: "Main Campus",
    category: "Admissions",
    featured: "true",
  },
  {
    id: "2",
    title: "Science Fair",
    description: "Students showcase innovative science projects and experiments.",
    date: new Date("2025-11-08T09:00:00"),
    time: "9:00 AM - 3:00 PM",
    location: "Science Building",
    category: "Academic",
    featured: "false",
  },
  {
    id: "3",
    title: "Fall Musical Performance",
    description: "Annual theater production featuring talented student performers.",
    date: new Date("2025-11-22T19:00:00"),
    time: "7:00 PM - 9:30 PM",
    location: "Performing Arts Center",
    category: "Arts",
    featured: "false",
  },
  {
    id: "4",
    title: "Parent-Teacher Conferences",
    description: "Meet with teachers to discuss student progress and academic goals.",
    date: new Date("2025-11-12T14:00:00"),
    time: "2:00 PM - 7:00 PM",
    location: "Various Classrooms",
    category: "Academic",
    featured: "false",
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { data: events = defaultEvents, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const featuredEvent = events.find(event => event.featured === "true") || upcomingEvents[0];

  return (
    <section id="events" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our vibrant school community through exciting events and programs
            throughout the year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-32 rounded-lg bg-card border border-card-border animate-pulse" />
              ))
            ) : (
              upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                data-testid={`event-item-${event.id}`}
              >
                <Card className="hover-elevate active-elevate-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                          <div className="text-2xl font-bold text-primary">
                            {format(new Date(event.date), "d")}
                          </div>
                          <div className="text-xs text-primary font-medium uppercase">
                            {format(new Date(event.date), "MMM")}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              ))
            )}
          </motion.div>

          {isLoading ? (
            <div className="h-96 rounded-lg bg-card border border-card-border animate-pulse" />
          ) : featuredEvent && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="featured-event"
            >
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300">
                <CardHeader className="space-y-1 pb-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit mb-2">
                    Featured Event
                  </div>
                  <CardTitle className="text-2xl">{featuredEvent.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{featuredEvent.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">
                        {format(new Date(featuredEvent.date), "EEEE, MMMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">{featuredEvent.location}</span>
                    </div>
                  </div>
                  <Button className="w-full" data-testid="button-register-event">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
