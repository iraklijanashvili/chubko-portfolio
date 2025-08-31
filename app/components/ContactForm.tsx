"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Check, X, Loader2, User, Mail, MessageSquare } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactForm = () => {
  // Using Formspree hook
  const [state, handleFormspreeSubmit] = useForm("mzzbwzjb")
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  // Clear form on successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
    }
  }, [state.succeeded])

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // Handle form submission with validation
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Use Formspree's handleSubmit
    await handleFormspreeSubmit(e)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            <User className="w-4 h-4 inline mr-2" aria-hidden="true" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-background focus:outline-none focus:ring-2 focus:ring-chubko-purple focus:border-transparent ${
              errors.name 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-border hover:border-chubko-purple/50'
            }`}
            placeholder="Enter your full name"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                role="alert"
              >
                <X className="w-3 h-3" aria-hidden="true" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
            <Mail className="w-4 h-4 inline mr-2" aria-hidden="true" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-background focus:outline-none focus:ring-2 focus:ring-chubko-purple focus:border-transparent ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-border hover:border-chubko-purple/50'
            }`}
            placeholder="Enter your email address"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                role="alert"
              >
                <X className="w-3 h-3" aria-hidden="true" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
            <MessageSquare className="w-4 h-4 inline mr-2" aria-hidden="true" />
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-background focus:outline-none focus:ring-2 focus:ring-chubko-purple focus:border-transparent resize-none ${
              errors.message 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-border hover:border-chubko-purple/50'
            }`}
            placeholder="Tell us about your project, goals, and how we can help you..."
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id="message-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                role="alert"
              >
                <X className="w-3 h-3" aria-hidden="true" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary btn-press hover-lift focus-ring py-4 px-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-describedby="submit-status"
          >
            <AnimatePresence mode="wait">
              {state.submitting ? (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Sending Message...
                </motion.div>
              ) : (
                <motion.div
                  key="submit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  Send Message
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {state.succeeded && (
            <motion.div
              id="submit-status"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-xl border bg-green-500/10 border-green-500/20 text-green-600"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Messages */}
        <div role="alert" aria-live="assertive">
          <ValidationError errors={state.errors} />
        </div>
      </form>

      {/* Form Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 p-6 bg-muted/50 rounded-2xl"
      >
        <h4 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
          What happens next?
        </h4>
        <ul className="text-sm text-muted-foreground space-y-2" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chubko-purple rounded-full" aria-hidden="true"></div>
            We&apos;ll review your message within 24 hours
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chubko-purple rounded-full" aria-hidden="true"></div>
            Schedule a free consultation call
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chubko-purple rounded-full" aria-hidden="true"></div>
            Provide a detailed project proposal
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default ContactForm