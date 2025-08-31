"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, Tag, User } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  tags: string[]
  fullDescription?: string
  client?: string
  year?: string
  role?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

interface PortfolioModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const PortfolioModal = ({ project, isOpen, onClose }: PortfolioModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-4xl max-h-[90vh] bg-background rounded-3xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-chubko-purple/20 to-chubko-pink/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-black text-chubko-purple/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {/* In a real app, you would use: */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  /> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                      {project.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.fullDescription || project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Tag className="w-5 h-5 text-chubko-purple" />
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-chubko-purple/10 text-chubko-purple text-sm font-medium rounded-full border border-chubko-purple/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Project Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <button className="btn-primary px-6 py-3 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </button>
                      )}
                      {project.githubUrl && (
                        <button className="btn-secondary px-6 py-3 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Code
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Project Details Sidebar */}
                  <div className="space-y-6">
                    <div className="p-6 bg-muted/50 rounded-2xl">
                      <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                      
                      <div className="space-y-4">
                        {project.client && (
                          <div className="flex items-start gap-3">
                            <User className="w-5 h-5 text-chubko-purple mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">Client</div>
                              <div className="font-medium">{project.client}</div>
                            </div>
                          </div>
                        )}

                        {project.year && (
                          <div className="flex items-start gap-3">
                            <Calendar className="w-5 h-5 text-chubko-purple mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">Year</div>
                              <div className="font-medium">{project.year}</div>
                            </div>
                          </div>
                        )}

                        {project.role && (
                          <div className="flex items-start gap-3">
                            <Tag className="w-5 h-5 text-chubko-purple mt-0.5" />
                            <div>
                              <div className="text-sm text-muted-foreground">Role</div>
                              <div className="font-medium">{project.role}</div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3">
                          <Tag className="w-5 h-5 text-chubko-purple mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground">Category</div>
                            <div className="font-medium capitalize">{project.category}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Related Projects */}
                    <div className="p-6 bg-gradient-to-br from-chubko-purple/5 to-chubko-pink/5 rounded-2xl border border-chubko-purple/10">
                      <h3 className="text-lg font-semibold mb-3">Interested in similar work?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Let&apos;s discuss your project and see how we can help bring your vision to life.
                      </p>
                      <button className="w-full btn-primary py-2 text-sm">
                        Start a Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PortfolioModal
