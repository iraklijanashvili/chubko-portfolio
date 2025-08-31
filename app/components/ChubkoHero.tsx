"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import TypewriterText from "./TypewriterText"

const ChubkoHero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-chubko-purple/10 via-transparent to-chubko-pink/10" aria-hidden="true"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-chubko-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chubko-pink/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center container-padding max-w-7xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="whitespace-element"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-none" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
            <span className="gradient-text">
              CHUBKO
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="whitespace-element"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            <span className="font-medium text-foreground">Creative Graphic Design Studio</span>
            <br />
            <span className="text-lg md:text-xl font-normal opacity-90">
              <TypewriterText 
                texts={[
                  "Crafting bold visual stories that inspire",
                  "Creating memorable brand experiences", 
                  "Designing the future of digital creativity",
                  "Transforming ideas into visual masterpieces"
                ]}
                speed={100}
                deleteSpeed={50}
                delay={3000}
              />
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center whitespace-element"
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="btn-primary btn-press btn-ripple hover-lift focus-ring px-8 py-4 text-lg font-semibold"
          >
            View Our Work
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary btn-press hover-lift focus-ring px-8 py-4 text-lg"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-8 h-8 text-muted-foreground hover:text-purple-600 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChubkoHero
