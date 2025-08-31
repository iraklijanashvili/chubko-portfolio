"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const ChubkoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow Inc.",
      company: "TechFlow Inc.",
      content: "CHUBKO transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The new design has significantly improved our market presence.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Luxe Fashion Co.",
      content: "Working with CHUBKO was an absolute pleasure. They understood our vision perfectly and delivered a sophisticated brand identity that truly represents our luxury positioning.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Artisan Roasters",
      content: "The packaging design CHUBKO created for our coffee brand is simply stunning. It perfectly captures the artisanal quality of our products and has helped us stand out in a crowded market.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Creative Director",
      company: "RestaurantPro Chain",
      content: "CHUBKO's creative approach to our restaurant branding was exceptional. They created a cohesive visual identity that works perfectly across all our locations and marketing materials.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Product Manager",
      company: "HealthTech Solutions",
      content: "The UI/UX design for our health app is intuitive and beautiful. CHUBKO made complex health data accessible and engaging for our users. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-chubko-purple/5 to-transparent">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center whitespace-section"
        >
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
            <span className="gradient-text">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with CHUBKO.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="modern-card p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mb-6"
                >
                  <Quote className="w-12 h-12 mx-auto text-chubko-purple/30" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-center gap-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 italic"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center justify-center gap-4"
                >
                  {/* Client Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-chubko-purple/20 to-chubko-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-chubko-purple" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="text-left">
                    <div className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-chubko-purple font-medium" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compact Navigation */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-muted hover:bg-chubko-purple/10 rounded-full transition-all duration-300 group hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-chubko-purple transition-colors" />
            </button>

            {/* Compact Dots Indicator */}
            <div className="flex gap-1.5 px-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-chubko-purple scale-125'
                      : 'bg-muted hover:bg-chubko-purple/50 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 bg-muted hover:bg-chubko-purple/10 rounded-full transition-all duration-300 group hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-chubko-purple transition-colors" />
            </button>
          </div>

          {/* Compact Auto-play indicator */}
          <div className="flex justify-center mt-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-chubko-purple transition-colors px-3 py-1 rounded-full hover:bg-muted/50"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChubkoTestimonials
