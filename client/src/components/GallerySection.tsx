import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { GalleryItem } from "@shared/schema";

const defaultGallery: GalleryItem[] = [
  { id: "1", title: "Science Laboratory", category: "Academics", imageUrl: "/assets/generated_images/Science_lab_classroom_activity_052ee7e3.png", description: "Students conducting experiments" },
  { id: "2", title: "Basketball Game", category: "Sports", imageUrl: "/assets/generated_images/Basketball_gymnasium_sports_activity_956a1b01.png", description: "Varsity basketball action" },
  { id: "3", title: "Art Class", category: "Arts", imageUrl: "/assets/generated_images/Art_classroom_creative_activity_3bcab34a.png", description: "Creative expression through painting" },
  { id: "4", title: "Library", category: "Campus", imageUrl: "/assets/generated_images/School_library_study_space_50f8b6d0.png", description: "Modern study spaces" },
  { id: "5", title: "Theater Performance", category: "Events", imageUrl: "/assets/generated_images/Theater_performance_event_34c743fa.png", description: "Annual school play" },
  { id: "6", title: "Graduation", category: "Events", imageUrl: "/assets/generated_images/Graduation_celebration_ceremony_d5680d6c.png", description: "Celebrating achievements" },
  { id: "7", title: "Computer Lab", category: "Academics", imageUrl: "/assets/generated_images/Computer_lab_technology_class_e651c0f8.png", description: "Technology education" },
  { id: "8", title: "Cafeteria", category: "Campus", imageUrl: "/assets/generated_images/Cafeteria_lunch_social_time_f3c848c4.png", description: "Community dining" },
  { id: "9", title: "Soccer Field", category: "Sports", imageUrl: "/assets/generated_images/Soccer_field_PE_activity_bd676682.png", description: "Physical education" },
  { id: "10", title: "Music Room", category: "Arts", imageUrl: "/assets/generated_images/Music_classroom_band_practice_00696fd3.png", description: "Band practice" },
];

const categories = ["All", "Campus", "Academics", "Sports", "Arts", "Events"];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const { data: gallery = defaultGallery, isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            Campus Life Gallery
          </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the vibrant life at Smart School Academy through snapshots of our students,
            facilities, and events.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="aspect-[4/3] rounded-lg bg-card border border-card-border animate-pulse" />
            ))
          ) : (
            filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              onClick={() => setLightboxImage(item)}
              data-testid={`gallery-item-${item.id}`}
              className="relative group cursor-pointer rounded-lg overflow-hidden aspect-[4/3] hover-elevate active-elevate-2"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-white/80 text-xs">{item.description}</p>
                </div>
              </div>
            </motion.div>
            ))
          )}
        </div>
      </div>

      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.imageUrl}
              alt={lightboxImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold mb-2">{lightboxImage.title}</h3>
              <p className="text-white/80">{lightboxImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
