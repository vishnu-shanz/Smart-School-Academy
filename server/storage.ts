import {
  type FacultyMember,
  type InsertFacultyMember,
  type Event,
  type InsertEvent,
  type GalleryItem,
  type InsertGalleryItem,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getFacultyMembers(): Promise<FacultyMember[]>;
  getFacultyMember(id: string): Promise<FacultyMember | undefined>;
  createFacultyMember(faculty: InsertFacultyMember): Promise<FacultyMember>;

  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;

  getGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItem(id: string): Promise<GalleryItem | undefined>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;

  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private faculty: Map<string, FacultyMember>;
  private events: Map<string, Event>;
  private gallery: Map<string, GalleryItem>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.faculty = new Map();
    this.events = new Map();
    this.gallery = new Map();
    this.contactSubmissions = new Map();
    this.seedData();
  }

  private seedData() {
    const defaultFaculty: InsertFacultyMember[] = [
      {
        name: "Dr. Ananya Rao",
        title: "Head of Science Department",
        department: "Science",
        bio: "Dr. Rao brings 15 years of teaching and research experience and a passion for making science accessible and exciting for all students.",
        qualifications: "Ph.D. in Chemistry, IISc • M.Sc. in Education",
        imageUrl: "/assets/generated_images/Female_science_teacher_headshot_da22b2cd.png",
      },
      {
        name: "Mr. Rajesh Kumar",
        title: "Mathematics Teacher",
        department: "Mathematics",
        bio: "Mr. Kumar specializes in advanced mathematics and has helped countless students discover the beauty of mathematical thinking.",
        qualifications: "M.Sc. in Mathematics, IIT Bombay • B.Ed.",
        imageUrl: "/assets/generated_images/Male_math_teacher_headshot_baebc8a9.png",
      },
      {
        name: "Ms. Priya Sharma",
        title: "English & Literature",
        department: "English",
        bio: "Ms. Sharma's innovative approach to literature encourages students to find their own voice through creative writing and critical analysis.",
        qualifications: "M.A. in English, University of Delhi • B.A. in English Literature",
        imageUrl: "/assets/generated_images/Female_English_teacher_headshot_379f1248.png",
      },
      {
        name: "Coach Arjun Patel",
        title: "Physical Education",
        department: "Athletics",
        bio: "Coach Patel emphasizes the importance of physical fitness, teamwork, and sportsmanship in developing well-rounded students.",
        qualifications: "M.P.Ed. • Certified Coach",
        imageUrl: "/assets/generated_images/Male_PE_teacher_headshot_e14c446b.png",
      },
      {
        name: "Ms. Kavita Menon",
        title: "Visual Arts Director",
        department: "Arts",
        bio: "Ms. Menon inspires creativity and artistic expression through diverse mediums and techniques in our award-winning arts program.",
        qualifications: "M.F.A. in Fine Arts • B.A. in Art Education",
        imageUrl: "/assets/generated_images/Female_art_teacher_headshot_91377a2f.png",
      },
      {
        name: "Dr. Ramesh Iyer",
        title: "History Department Chair",
        department: "History",
        bio: "Dr. Iyer brings history to life through engaging storytelling and helps students understand the connections between past and present.",
        qualifications: "Ph.D. in History • M.A. in World History",
        imageUrl: "/assets/generated_images/Male_history_teacher_headshot_b9271df5.png",
      },
    ];

    defaultFaculty.forEach((faculty) => {
      const id = randomUUID();
      this.faculty.set(id, { ...faculty, id });
    });

    const defaultEvents: InsertEvent[] = [
      {
        title: "Open House",
  description: "Join us for a comprehensive tour of our campus, meet our faculty, and learn about our programs. This is a perfect opportunity for prospective families to experience Smart School Academy firsthand.",
        date: new Date("2025-11-15T10:00:00"),
        time: "10:00 AM - 2:00 PM",
        location: "Main Campus",
        category: "Admissions",
        featured: "true",
      },
      {
        title: "Science Fair",
        description: "Students showcase innovative science projects and experiments.",
        date: new Date("2025-11-08T09:00:00"),
        time: "9:00 AM - 3:00 PM",
        location: "Science Building",
        category: "Academic",
        featured: "false",
      },
      {
        title: "Fall Musical Performance",
        description: "Annual theater production featuring talented student performers.",
        date: new Date("2025-11-22T19:00:00"),
        time: "7:00 PM - 9:30 PM",
        location: "Performing Arts Center",
        category: "Arts",
        featured: "false",
      },
      {
        title: "Parent-Teacher Conferences",
        description: "Meet with teachers to discuss student progress and academic goals.",
        date: new Date("2025-11-12T14:00:00"),
        time: "2:00 PM - 7:00 PM",
        location: "Various Classrooms",
        category: "Academic",
        featured: "false",
      },
    ];

    defaultEvents.forEach((event) => {
      const id = randomUUID();
      this.events.set(id, { ...event, id, featured: event.featured ?? "false" });
    });

    const defaultGallery: InsertGalleryItem[] = [
      { title: "Science Laboratory", category: "Academics", imageUrl: "/assets/generated_images/Science_lab_classroom_activity_052ee7e3.png", description: "Students conducting experiments" },
      { title: "Basketball Game", category: "Sports", imageUrl: "/assets/generated_images/Basketball_gymnasium_sports_activity_956a1b01.png", description: "Varsity basketball action" },
      { title: "Art Class", category: "Arts", imageUrl: "/assets/generated_images/Art_classroom_creative_activity_3bcab34a.png", description: "Creative expression through painting" },
      { title: "Library", category: "Campus", imageUrl: "/assets/generated_images/School_library_study_space_50f8b6d0.png", description: "Modern study spaces" },
      { title: "Theater Performance", category: "Events", imageUrl: "/assets/generated_images/Theater_performance_event_34c743fa.png", description: "Annual school play" },
      { title: "Graduation", category: "Events", imageUrl: "/assets/generated_images/Graduation_celebration_ceremony_d5680d6c.png", description: "Celebrating achievements" },
      { title: "Computer Lab", category: "Academics", imageUrl: "/assets/generated_images/Computer_lab_technology_class_e651c0f8.png", description: "Technology education" },
      { title: "Cafeteria", category: "Campus", imageUrl: "/assets/generated_images/Cafeteria_lunch_social_time_f3c848c4.png", description: "Community dining" },
      { title: "Soccer Field", category: "Sports", imageUrl: "/assets/generated_images/Soccer_field_PE_activity_bd676682.png", description: "Physical education" },
      { title: "Music Room", category: "Arts", imageUrl: "/assets/generated_images/Music_classroom_band_practice_00696fd3.png", description: "Band practice" },
    ];

    defaultGallery.forEach((item) => {
      const id = randomUUID();
      this.gallery.set(id, { ...item, id });
    });
  }

  async getFacultyMembers(): Promise<FacultyMember[]> {
    return Array.from(this.faculty.values());
  }

  async getFacultyMember(id: string): Promise<FacultyMember | undefined> {
    return this.faculty.get(id);
  }

  async createFacultyMember(insertFaculty: InsertFacultyMember): Promise<FacultyMember> {
    const id = randomUUID();
    const faculty: FacultyMember = { ...insertFaculty, id };
    this.faculty.set(id, faculty);
    return faculty;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id, featured: insertEvent.featured ?? "false" };
    this.events.set(id, event);
    return event;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.gallery.values());
  }

  async getGalleryItem(id: string): Promise<GalleryItem | undefined> {
    return this.gallery.get(id);
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = { ...insertItem, id };
    this.gallery.set(id, item);
    return item;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
