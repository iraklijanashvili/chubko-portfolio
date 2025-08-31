"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Dribbble, Heart } from "lucide-react"

const ChubkoFooter = () => {
  const currentYear = 2025

  const footerLinks = {
    services: [
      { name: "Brand Identity", href: "#services" },
      { name: "Web Design", href: "#services" },
      { name: "Print Design", href: "#services" },
      { name: "Mobile App Design", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#portfolio" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Design Process", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  }

  const contactInfo = [
    { icon: Mail, text: "hello@chubko.design", href: "mailto:hello@chubko.design" },
    { icon: Phone, text: "+995 (571) 014 760", href: "tel:+995571014760" },
    { icon: MapPin, text: "Georgia, Tbilisi", href: "#" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-t from-purple-500/5 to-transparent border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CHUBKO
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creative graphic design studio crafting bold visual stories that inspire and engage. 
              We transform ideas into powerful visual experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-purple-600 transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for design tips and updates.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium mb-3">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} CHUBKO. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Georgia</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-purple-600 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-purple-600 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-purple-600 transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default ChubkoFooter
