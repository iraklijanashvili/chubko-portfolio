"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import PortfolioModal from "./PortfolioModal"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  tags: string[]
  client: string
  year: string
  role: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const ChubkoPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Web Design" },
    { id: "print", label: "Print Design" },
    { id: "digital", label: "Digital Art" },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxe Fashion Brand",
      category: "branding",
      image: "/EcommerceBackend.png",
      description: "Complete brand identity for luxury fashion retailer",
      fullDescription: "A comprehensive brand identity project for a luxury fashion retailer, including logo design, brand guidelines, packaging, and marketing materials. The project focused on creating an elegant and sophisticated visual identity that reflects the premium nature of the brand.",
      tags: ["Logo Design", "Brand Guidelines", "Packaging"],
      client: "Luxe Fashion Co.",
      year: "2024",
      role: "Brand Designer",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "TechFlow Website",
      category: "web",
      image: "/ReactAdminPannel@ChetanKesare.png",
      description: "Modern web design for technology startup",
      fullDescription: "A modern, responsive website design for a technology startup specializing in workflow automation. The design emphasizes clean lines, intuitive navigation, and a professional aesthetic that builds trust with enterprise clients.",
      tags: ["UI/UX", "Responsive", "Interactive"],
      client: "TechFlow Inc.",
      year: "2024",
      role: "UI/UX Designer",
      technologies: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Artisan Coffee Packaging",
      category: "print",
      image: "/FootVistaThumbnail.png",
      description: "Premium packaging design for artisan coffee brand",
      fullDescription: "Premium packaging design for a boutique coffee roaster, featuring custom illustrations and typography that tells the story of each coffee's origin. The design balances sustainability with premium appeal.",
      tags: ["Packaging", "Print Design", "Branding"],
      client: "Artisan Roasters",
      year: "2023",
      role: "Packaging Designer",
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 4,
      title: "Digital Art Collection",
      category: "digital",
      image: "/JapEat @ChetanKesare.png",
      description: "Contemporary digital art series",
      fullDescription: "A contemporary digital art collection exploring themes of technology and human connection. Each piece combines abstract elements with geometric forms to create visually striking compositions.",
      tags: ["Digital Art", "Illustration", "NFT"],
      client: "Personal Project",
      year: "2024",
      role: "Digital Artist",
      technologies: ["Procreate", "Adobe Photoshop", "Blender"],
    },
    {
      id: 5,
      title: "RestaurantPro Identity",
      category: "branding",
      image: "/newPortfolio.png",
      description: "Brand identity for restaurant chain",
      fullDescription: "Complete brand identity system for a growing restaurant chain, including logo design, menu layouts, signage, and digital assets. The design captures the warmth and authenticity of the dining experience.",
      tags: ["Logo", "Menu Design", "Signage"],
      client: "RestaurantPro Chain",
      year: "2023",
      role: "Brand Designer",
      technologies: ["Adobe Creative Suite", "Sketch"],
      liveUrl: "#",
    },
    {
      id: 6,
      title: "HealthApp Interface",
      category: "web",
      image: "/ReduxToolkit.png",
      description: "Mobile app interface for health tracking",
      fullDescription: "User interface design for a comprehensive health tracking mobile application. The design prioritizes accessibility and ease of use while presenting complex health data in an intuitive format.",
      tags: ["Mobile UI", "Health Tech", "User Experience"],
      client: "HealthTech Solutions",
      year: "2024",
      role: "UI/UX Designer",
      technologies: ["Figma", "Principle", "Adobe XD"],
      liveUrl: "#",
    },
    {
      id: 7,
      title: "Music Festival Poster",
      category: "print",
      image: "/Final.jpg",
      description: "Event poster design for music festival",
      fullDescription: "Dynamic poster design for an annual music festival, featuring bold typography and vibrant colors that capture the energy and excitement of live music. The design works across multiple formats and scales.",
      tags: ["Poster Design", "Event Branding", "Typography"],
      client: "Summer Beats Festival",
      year: "2023",
      role: "Graphic Designer",
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 8,
      title: "Abstract Digital Series",
      category: "digital",
      image: "/EcommerceBackend.png",
      description: "Abstract digital artwork collection",
      fullDescription: "An experimental series of abstract digital artworks that explore color, form, and movement. Each piece is created using generative techniques combined with traditional digital painting methods.",
      tags: ["Abstract Art", "Digital Design", "Creative"],
      client: "Gallery Exhibition",
      year: "2024",
      role: "Digital Artist",
      technologies: ["Processing", "Adobe After Effects", "Cinema 4D"],
    },
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="section-padding" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center whitespace-section"
        >
          <h2 
            id="portfolio-heading"
            className="mb-6" 
            style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
          >
            <span className="gradient-text">
              Our Portfolio
            </span>
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" 
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Explore our diverse collection of creative projects and visual solutions that have helped brands make their mark.
          </p>
        </motion.header>

        {/* Category Filter */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              role="tab"
              aria-selected={selectedCategory === category.id}
              aria-controls="portfolio-grid"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus-ring ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-chubko-purple to-chubko-pink text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-chubko-purple/10 hover:text-chubko-purple"
              }`}
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              {category.label}
            </button>
          ))}
        </motion.nav>

        {/* Enhanced Portfolio Grid */}
        <motion.div 
          id="portfolio-grid"
          layout
          className="portfolio-grid"
          role="tabpanel"
          aria-labelledby="portfolio-heading"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group modern-card portfolio-card"
              >
                {/* Project Image */}
                <div className="relative portfolio-card-image overflow-hidden cursor-pointer">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Hover Overlay with Project Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="text-white mb-4">
                      <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90 line-clamp-2" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            openModal(project)
                          }}
                          className="glass p-3 rounded-full text-white hover:scale-110 transition-all duration-300 focus-ring"
                          aria-label={`View details for ${project.title}`}
                        >
                          <Eye className="w-4 h-4" aria-hidden="true" />
                        </button>
                        {project.liveUrl && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                            }}
                            className="glass p-3 rounded-full text-white hover:scale-110 transition-all duration-300 focus-ring"
                            aria-label={`View live project: ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info - OPTIMIZED FOR FIXED HEIGHT */}
                <div className="portfolio-card-content">
                  {/* Title and Description */}
                  <div className="mb-2">
                    <h3 
                      className="text-base font-bold mb-1 group-hover:text-chubko-purple transition-colors duration-300 line-clamp-1" 
                      style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-muted-foreground text-xs leading-tight line-clamp-2" 
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span 
                      className="line-clamp-1" 
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {project.client}
                    </span>
                    <span style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Tags - Compact at bottom */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-chubko-purple/10 text-chubko-purple text-xs font-medium rounded-md border border-chubko-purple/20"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary btn-press hover-lift focus-ring px-8 py-4 text-lg font-semibold">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default ChubkoPortfolio