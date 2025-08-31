"use client"

import { motion } from "framer-motion"
import { Palette, Monitor, Package, Smartphone, Zap, Users } from "lucide-react"

const ChubkoServices = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color schemes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
      price: "Starting at $2,500"
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Modern, responsive websites that look stunning and perform exceptionally across all devices.",
      features: ["Responsive Design", "UI/UX Design", "Interactive Elements", "Performance Optimization"],
      price: "Starting at $3,500"
    },
    {
      icon: Package,
      title: "Print Design",
      description: "Eye-catching print materials that make your brand stand out in the physical world.",
      features: ["Business Cards", "Brochures", "Packaging", "Marketing Materials"],
      price: "Starting at $800"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Intuitive mobile app interfaces that provide exceptional user experiences.",
      features: ["iOS Design", "Android Design", "Prototyping", "User Testing"],
      price: "Starting at $4,000"
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Creative digital marketing materials that drive engagement and conversions.",
      features: ["Social Media Graphics", "Ad Campaigns", "Email Templates", "Banner Design"],
      price: "Starting at $1,200"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Strategic design consultation to help you make informed decisions about your brand.",
      features: ["Brand Strategy", "Design Audit", "Competitive Analysis", "Recommendations"],
      price: "Starting at $500"
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of design services to help your brand make a lasting impact in the market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-lg font-semibold text-purple-600 mb-6">
                    {service.price}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Custom Service CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project is unique. Let&apos;s discuss your specific needs and create a tailored solution that perfectly fits your vision.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChubkoServices
