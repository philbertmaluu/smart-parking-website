import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+255 748 304 649',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info.smartparking@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dar es Salaam, Tanzania',
      description: 'East Africa Regional Office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 8AM - 6PM',
      description: 'EAT (UTC+3)'
    }
  ];

  const services = [
    'Parking as a Service (PaaS)',
    'Custom Software Development',
    'System Integration',
    'Equipment Purchase',
    'Partnership Inquiry',
    'Technical Support',
    'Other'
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-[#902D2F]">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your parking operations? Contact us today for a personalized consultation and discover how our AI-powered solutions can transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company/Organization</label>
                  <Input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest *</label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, questions, or how we can help you..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#902D2F] hover:bg-[#7A2528] text-white"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#902D2F] to-[#B83A3F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-[#902D2F] font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white"
                >
                  <MessageCircle className="mr-3 w-4 h-4" />
                  Chat on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white"
                >
                  <Phone className="mr-3 w-4 h-4" />
                  Schedule a Call
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white"
                >
                  <Mail className="mr-3 w-4 h-4" />
                  Email Directly
                </Button>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="glass rounded-xl p-6 text-center">
              <h4 className="font-semibold mb-2">Want to See It in Action?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a personalized demo and see how our AI-powered system works.
              </p>
              <Button 
                size="lg"
                className="bg-[#902D2F] hover:bg-[#7A2528] text-white"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}