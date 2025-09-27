import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cloud, Code, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: 'Parking as a Service (PaaS)',
      description: 'Complete cloud-based parking management solution with AI-powered analytics and real-time monitoring.',
      features: [
        'Cloud-based infrastructure',
        'Real-time vehicle tracking',
        'Automated payment processing',
        'Advanced analytics dashboard',
        '24/7 monitoring and support'
      ],
      image: 'https://images.unsplash.com/photo-1558953501-0248a23177fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXJraW5nJTIwZ2FyYWdlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg5MDY2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored parking management software solutions designed to meet your specific business requirements.',
      features: [
        'Custom AI algorithms',
        'API integration',
        'Mobile applications',
        'Web dashboards',
        'Legacy system integration'
      ],
      image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NTg5MDAyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Cog,
      title: 'System Integration Services',
      description: 'Professional installation and integration of hardware components with existing infrastructure.',
      features: [
        'Hardware installation',
        'Network configuration',
        'System testing',
        'Staff training',
        'Ongoing maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1709364531108-d0cf9db26258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2xsJTIwZ2F0ZSUyMGJvb20lMjBiYXJyaWVyfGVufDF8fHx8MTc1OTAwMDY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#902D2F]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive parking and toll management solutions tailored to your needs, from cloud-based services to custom development and professional integration.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#902D2F] to-[#B83A3F] rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#902D2F] flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  className="bg-[#902D2F] hover:bg-[#7A2528] text-white"
                  size="lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-2xl p-6">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 glass rounded-full p-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <service.icon className="w-6 h-6 text-[#902D2F]" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center glass rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Parking Operations?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI-powered solutions can revolutionize your parking and toll management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#902D2F] hover:bg-[#7A2528] text-white px-8"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white px-8"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}