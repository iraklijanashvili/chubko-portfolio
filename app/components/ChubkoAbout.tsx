"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const ChubkoAbout = () => {
  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Target, number: "500+", label: "Projects Completed" },
    { icon: Lightbulb, number: "5+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Awards Won" },
  ]

  const values = [
    {
      title: "Creative Excellence",
      description: "We push boundaries to create designs that stand out and make lasting impressions.",
    },
    {
      title: "Client-Focused",
      description: "Your vision is our priority. We collaborate closely to bring your ideas to life.",
    },
    {
      title: "Innovation",
      description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
    },
  ]

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center whitespace-section"
        >
          <h2 
            id="about-heading"
            className="mb-6" 
            style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
          >
            <span className="gradient-text">
              About CHUBKO
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            We are a passionate team of designers and creatives dedicated to transforming ideas into powerful visual experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Visual Stories Since 2019
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                CHUBKO was born from a simple belief: great design has the power to transform businesses and touch lives. 
                What started as a small studio has grown into a creative powerhouse, serving clients worldwide with innovative 
                design solutions.
              </p>
              <p>
                We specialize in creating cohesive brand identities, stunning web experiences, and memorable visual communications 
                that help our clients stand out in today&apos;s competitive landscape.
              </p>
              <p>
                Our team combines artistic vision with strategic thinking, ensuring every project not only looks amazing 
                but also drives real business results.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl font-black text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-purple-600">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChubkoAbout
