import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "The Sharma Residence",
    location: "Vaishali Nagar",
    category: "Residential",
    image: project1,
  },
  {
    id: 2,
    title: "Agarwal Family Home",
    location: "Malviya Nagar",
    category: "Kitchen & Living",
    image: project2,
  },
  {
    id: 3,
    title: "Executive Office Suite",
    location: "C-Scheme",
    category: "Commercial",
    image: project3,
  },
  {
    id: 4,
    title: "The Mehra Villa",
    location: "Civil Lines",
    category: "Dining & Entertainment",
    image: project4,
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Our Work
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
            Curated <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans">
            A selection of our finest Vastu-compliant designs, where ancient
            wisdom meets contemporary elegance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-sm hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs text-gold-light tracking-widest uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl lg:text-2xl font-serif font-medium text-cream">
                  {project.title}
                </h3>
                <p className="text-cream/70 text-sm mt-1">{project.location}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-tr-sm" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-medium tracking-wide group">
            <span>View All Projects</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
