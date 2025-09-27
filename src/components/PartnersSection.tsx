import React from 'react';
import { motion } from 'motion/react';
import { Handshake, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Button } from './ui/button';

export function PartnersSection() {
  const partnerTypes = [
    {
      icon: Users,
      title: 'Electronics Suppliers',
      description: 'Join our network of hardware suppliers and distributors to reach more customers.',
      benefits: [
        'Access to exclusive product lines',
        'Bulk pricing advantages',
        'Technical support included',
        'Marketing co-op opportunities'
      ]
    },
    {
      icon: Globe,
      title: 'System Integrators',
      description: 'Partner with us to offer complete smart parking solutions to your clients.',
      benefits: [
        'Comprehensive training programs',
        'Technical certification',
        'Sales support and leads',
        'Margin protection policies'
      ]
    },
    {
      icon: Award,
      title: 'Technology Partners',
      description: 'Collaborate on innovative solutions and expand our technological capabilities.',
      benefits: [
        'Joint product development',
        'Shared research initiatives',
        'Cross-platform integration',
        'Co-marketing opportunities'
      ]
    }
  ];

  const partnershipLevels = [
    {
      name: 'Authorized Reseller',
      level: 'Bronze',
      discount: '10-15%',
      features: [
        'Product resale rights',
        'Basic training materials',
        'Standard support',
        'Quarterly business reviews'
      ]
    },
    {
      name: 'Preferred Partner',
      level: 'Silver',
      discount: '15-25%',
      features: [
        'Enhanced discount structure',
        'Advanced training programs',
        'Priority technical support',
        'Marketing development funds',
        'Lead sharing program'
      ],
      popular: true
    },
    {
      name: 'Strategic Partner',
      level: 'Gold',
      discount: '25-35%',
      features: [
        'Maximum discount rates',
        'Exclusive territory rights',
        'Dedicated account manager',
        'Custom product development',
        'Joint marketing campaigns',
        'Early access to new products'
      ]
    }
  ];

  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partnership <span className="text-[#902D2F]">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our growing network of partners and help us deliver innovative smart parking solutions across Africa and beyond.
          </p>
        </motion.div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#902D2F] to-[#B83A3F] rounded-full flex items-center justify-center mx-auto mb-6">
                <partner.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{partner.title}</h3>
              <p className="text-muted-foreground mb-6">{partner.description}</p>
              
              <div className="space-y-3 mb-8">
                {partner.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#902D2F] flex-shrink-0" />
                    <span className="text-sm text-muted-foreground text-left">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                className="bg-[#902D2F] hover:bg-[#7A2528] text-white w-full"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Partnership Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={level.name}
                className={`glass rounded-2xl p-8 relative ${
                  level.popular ? 'ring-2 ring-[#902D2F]' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {level.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#902D2F] text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2">{level.name}</h4>
                  <div className="text-[#902D2F] font-semibold mb-2">{level.level} Level</div>
                  <div className="text-2xl font-bold">{level.discount}</div>
                  <div className="text-sm text-muted-foreground">Discount Range</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#902D2F] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    level.popular 
                      ? 'bg-[#902D2F] hover:bg-[#7A2528] text-white' 
                      : 'border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white'
                  }`}
                  variant={level.popular ? 'default' : 'outline'}
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-12 text-center"
        >
          <Handshake className="w-16 h-16 text-[#902D2F] mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our partner network and help bring cutting-edge smart parking solutions to markets across Africa. Together, we can build smarter cities and more efficient parking systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-[#902D2F] hover:bg-[#7A2528] text-white px-8"
            >
              Submit Partnership Application
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white px-8"
            >
              Download Partner Kit
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Questions about partnerships? Email us at 
            <span className="text-[#902D2F] ml-1">partnerships@smartparking.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}