# School Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from leading educational institutions (MIT, Stanford, Khan Academy) and modern school websites. Focus on establishing trust, showcasing community, and creating an inspiring digital presence that reflects academic excellence.

## Core Design Principles
- **Educational Authority**: Clean, professional layouts that communicate credibility
- **Community Showcase**: Prominent visual storytelling through photography
- **Accessible Information**: Clear hierarchy guiding parents and students to key information
- **Inspiration**: Uplifting design that reflects the school's values and aspirations

## Typography System

**Font Families** (via Google Fonts):
- Primary: Inter (headings, UI elements) - weights: 400, 500, 600, 700
- Secondary: Crimson Pro (hero headlines, quotes) - weights: 400, 600
- Body: Inter (paragraphs, content) - weight: 400

**Type Scale**:
- Hero Headline: 4xl-6xl (mobile-desktop), font-weight 700, Crimson Pro
- Section Headings: 3xl-4xl, font-weight 600, Inter
- Subsection Headings: xl-2xl, font-weight 600, Inter
- Card Titles: lg-xl, font-weight 500, Inter
- Body Text: base-lg, font-weight 400, line-height relaxed
- Captions/Meta: sm, font-weight 400

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)
- Card spacing: gap-6 md:gap-8
- Element spacing: space-y-4 to space-y-8

**Grid Systems**:
- Faculty/Gallery: 2-3 columns (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Events: 2 columns on desktop, single on mobile
- Feature highlights: 3-4 columns for icon-based content

## Page Structure & Sections

### 1. Hero Section
- Full viewport height (min-h-screen) with large background image showing campus life
- Centered content overlay with school name, tagline, and dual CTAs
- Primary CTA: "Schedule a Visit" | Secondary CTA: "Explore Academics"
- Buttons with backdrop-blur-md background for readability over images
- Subtle scroll indicator at bottom
- Image: Vibrant campus scene with students engaged in activities

### 2. Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, navigation center, "Apply Now" CTA right
- Mobile: Hamburger menu with slide-in drawer
- Navigation items: About, Academics, Faculty, Events, Gallery, Contact

### 3. Welcome/Overview Section
- Two-column layout: 60/40 split
- Left: Welcoming message from principal/headmaster with signature
- Right: Key statistics in grid (Students Enrolled, Faculty Members, Years of Excellence, College Acceptance Rate)
- Stats with large numbers, animated count-up on scroll into view

### 4. Academics Section
- Section intro with heading and descriptive paragraph
- 3-column grid of academic programs/departments
- Cards with icons, program names, brief descriptions
- Hover effect revealing "Learn More" link
- Below grid: Curriculum highlights in 4-column feature layout (STEM, Arts, Athletics, Global Studies)

### 5. Faculty Section
- Grid layout showcasing 6-8 faculty members
- Cards with: Professional headshot, name, title/department, brief bio (2-3 lines)
- Hover interaction revealing expanded bio and credentials
- "View All Faculty" CTA below grid
- Images: Professional, warm faculty photos with neutral backgrounds

### 6. Events Section
- Dual-column layout on desktop
- Left: Upcoming events list (3-4 events) with date badges, titles, times, locations
- Right: Featured event card with image, detailed description, registration CTA
- Each event with calendar icon, animated hover state
- "View Full Calendar" link
- Images: Event photos showing student activities, performances, sports

### 7. Gallery Section
- Masonry/Pinterest-style grid (3-4 columns)
- 12-15 images showcasing campus life, facilities, activities, achievements
- Category filters: All, Campus, Events, Sports, Arts, Academics
- Lightbox functionality on click with navigation arrows
- Images: Mix of candid student moments, facility shots, event highlights, classroom scenes

### 8. Testimonials/Community
- 3-column layout with parent and student testimonials
- Cards with quote, photo, name, relationship to school
- Rotating carousel on mobile
- Images: Authentic photos of students/parents

### 9. Contact Section
- Two-column split
- Left: Contact form (Name, Email, Phone, Inquiry Type dropdown, Message)
- Right: School information card with address, phone, email, office hours, embedded map
- Social media links
- "Schedule a Campus Tour" prominent CTA

### 10. Footer
- Three-column layout
- Column 1: School logo, tagline, accreditation badges
- Column 2: Quick links (Admissions, Calendar, Parent Portal, Staff Directory)
- Column 3: Contact info, newsletter signup
- Bottom bar: Copyright, Privacy Policy, Terms

## Component Library

**Cards**:
- Rounded corners (rounded-lg to rounded-xl)
- Subtle elevation (shadow-md on hover: shadow-lg)
- Padding: p-6 to p-8
- Smooth transitions (transition-all duration-300)

**Buttons**:
- Primary: Solid background, rounded-lg, px-6 py-3, font-weight 600
- Secondary: Outline style with hover fill
- CTA on images: backdrop-blur-md with semi-transparent background

**Forms**:
- Input fields: rounded-lg, border, px-4 py-3
- Focus states with subtle scaling
- Label above input, required indicators

**Navigation**:
- Horizontal on desktop, vertical drawer on mobile
- Active state with underline indicator
- Smooth scroll to sections

## Animation Strategy

**Scroll-Based Animations** (Framer Motion):
- Fade-in + slide-up for section entries (stagger children by 0.1s)
- Stats counter animations
- Gallery items stagger appearance
- Navigation background opacity change

**Micro-Interactions**:
- Card hover: subtle lift (translateY: -4px) + shadow enhancement
- Button hover: slight scale (1.02)
- Image zoom on hover in gallery (scale: 1.05)
- Faculty card flip/expand interaction

**Page Transitions**:
- Smooth fade between route changes (duration: 0.3s)

**Performance**: Limit simultaneous animations, use will-change sparingly, lazy load gallery images

## Images Specification

**Hero Image**: Wide-angle campus shot showing buildings and students, vibrant and welcoming, high-resolution landscape orientation

**Faculty Images**: Professional headshots (8-12 photos), consistent style, neutral backgrounds, warm expressions

**Gallery Images**: 15-20 diverse photos including:
- Classroom learning scenes
- Sports/athletic activities
- Arts performances and exhibitions
- Science labs and STEM activities
- Campus facilities
- Student social interactions
- School events and ceremonies

**Event Featured Images**: 3-4 event photos showing assemblies, performances, sports meets

**Testimonial Images**: 3-4 authentic student/parent photos

All images should feel genuine, avoid overly staged stock photo aesthetics.