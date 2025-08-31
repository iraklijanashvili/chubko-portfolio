"use client"

import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const ChubkoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    } else if (sectionId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={scrolled ? 'navbar-sticky' : 'navbar-transparent'}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <h1 className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
              <span className="gradient-text">
                CHUBKO
              </span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-chubko-purple font-medium transition-all duration-300 relative group px-2 py-1"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-chubko-purple to-chubko-pink group-hover:w-full transition-all duration-500 ease-out"></span>
              </motion.button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-all duration-300 rounded-lg"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile CTA */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default ChubkoNavbar
