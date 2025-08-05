"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Globe, Zap, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or technical issues",
      contact: "support@admybrand.ai",
      response: "Within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Sales Inquiries",
      description: "Learn about our plans and enterprise solutions",
      contact: "+1 (555) 123-4567",
      response: "Within 2 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      contact: "Available 24/7",
      response: "Instant",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Explore partnership and integration opportunities",
      contact: "partnerships@admybrand.ai",
      response: "Within 48 hours",
      color: "from-orange-500 to-red-500"
    }
  ]

  const officeLocations = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@admybrand.ai",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500"
    },
    {
      city: "New York",
      country: "United States",
      address: "456 Tech Avenue, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "nyc@admybrand.ai",
      icon: MapPin,
      color: "from-green-500 to-emerald-500"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "789 Digital Street, London, UK SW1A 1AA",
      phone: "+44 20 1234 5678",
      email: "london@admybrand.ai",
      icon: MapPin,
      color: "from-purple-500 to-indigo-500"
    }
  ]

  // Validation functions
  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required'
        if (value.trim().length < 2) return 'First name must be at least 2 characters'
        return ''
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required'
        if (value.trim().length < 2) return 'Last name must be at least 2 characters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'phone':
        if (value.trim()) {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
          if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            return 'Please enter a valid phone number'
          }
        }
        return ''
      
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.trim().length < 5) return 'Subject must be at least 5 characters'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      
      default:
        return ''
    }
  }

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleInputBlur = (name: keyof FormData) => {
    const error = validateField(name, formData[name])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof FormData
      const error = validateField(fieldName, formData[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        if (result.demo) {
          setSubmitMessage('Message sent successfully! (Demo mode - this is a demonstration. In production, this would send an actual email.)')
        } else {
          setSubmitMessage(result.message)
        }
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-display font-playfair text-white mb-6">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-body text-gray-400 max-w-4xl mx-auto mb-8">
              Have questions? Need support? Want to explore partnerships? We're here to help. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-modern">
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline" className="btn-modern-outline">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              How Can We <span className="text-gradient-primary">Help?</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-400 mb-4">
                      {method.description}
                    </CardDescription>
                    <div className="text-white font-semibold mb-2">{method.contact}</div>
                    <div className="text-gray-400 text-sm">Response: {method.response}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding px-4">
        <div className="container-modern max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Send Us a <span className="text-gradient-primary">Message</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <Card className="glass-dark border-white/10">
            <CardContent className="py-8">
              {/* Demo Mode Indicator */}
              <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-400 text-sm">
                    <strong>Demo Mode:</strong> This is a demonstration. Form submissions are logged but no actual emails are sent.
                  </p>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">{submitMessage}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400">{submitMessage}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      onBlur={() => handleInputBlur('firstName')}
                      className={`glass-dark border-white/10 text-white ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      onBlur={() => handleInputBlur('lastName')}
                      className={`glass-dark border-white/10 text-white ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={() => handleInputBlur('email')}
                      className={`glass-dark border-white/10 text-white ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone (Optional)</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onBlur={() => handleInputBlur('phone')}
                      className={`glass-dark border-white/10 text-white ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onBlur={() => handleInputBlur('subject')}
                    className={`glass-dark border-white/10 text-white ${errors.subject ? 'border-red-500' : ''}`}
                    placeholder="Enter subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onBlur={() => handleInputBlur('message')}
                    className={`glass-dark border-white/10 text-white resize-none ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="btn-modern w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Our <span className="text-gradient-primary">Offices</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Visit us at one of our global offices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${office.color} flex items-center justify-center`}>
                        <office.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">{office.city}</CardTitle>
                        <CardDescription className="text-gray-400">{office.country}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                      <p className="text-gray-300 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-300 text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-300 text-sm">{office.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding px-4">
        <div className="container-modern max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-playfair text-white mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-body text-gray-400 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What are your support hours?",
                answer: "Our support team is available 24/7 via live chat and email. Phone support is available Monday-Friday, 9 AM - 6 PM PST."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to emails within 24 hours, live chat inquiries instantly, and phone calls within 2 hours during business hours."
              },
              {
                question: "Do you offer enterprise support?",
                answer: "Yes, we offer dedicated enterprise support with priority response times, dedicated account managers, and custom solutions."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! You can schedule a personalized demo with our sales team. Just contact us and we'll set up a time that works for you."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-dark border-white/10">
                  <CardContent className="py-6">
                    <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass-dark border-white/10 max-w-4xl mx-auto">
              <CardContent className="py-12">
                <h3 className="text-2xl font-playfair text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using ADmyBRAND to transform their marketing.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-modern">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="btn-modern-outline">
                    <Globe className="w-4 h-4 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 