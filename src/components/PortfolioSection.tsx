import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, MapPin, Users, Car, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function PortfolioSection() {
  const caseStudy = {
    name: 'CHATO PARKING',
    location: 'Dar es Salaam, Tanzania',
    type: 'Shopping Mall Parking',
    description: 'Our flagship client showcasing the power of AI-driven parking management in a high-traffic commercial environment.',
    image: 'https://images.unsplash.com/photo-1558953501-0248a23177fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXJraW5nJTIwZ2FyYWdlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg5MDY2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    stats: [
      { icon: Car, value: '2,500+', label: 'Daily Vehicles' },
      { icon: Clock, value: '3.2s', label: 'Avg. Processing' },
      { icon: Users, value: '99.8%', label: 'Customer Satisfaction' }
    ],
    features: [
      'Real-time vehicle recognition',
      'Automated payment processing',
      'Smart space allocation',
      'Advanced analytics dashboard',
      'Mobile app integration',
      '24/7 system monitoring'
    ],
    results: [
      '40% reduction in wait times',
      '60% increase in operational efficiency',
      '95% accuracy in vehicle recognition',
      'Zero manual intervention required'
    ]
  };

  const upcomingProjects = [
    {
      name: 'International Airport',
      location: 'Coming Soon',
      type: 'Airport Parking',
      status: 'In Development'
    },
    {
      name: 'University Campus',
      location: 'Coming Soon',
      type: 'Educational Facility',
      status: 'Planning Phase'
    },
    {
      name: 'City Center Mall',
      location: 'Coming Soon',
      type: 'Commercial Complex',
      status: 'Proposal Stage'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#902D2F]">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing successful implementations of our AI-powered parking management systems across various industries and environments.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.name}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#902D2F] text-white">Featured Client</Badge>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass rounded-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-2xl font-bold text-[#902D2F]">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold text-[#902D2F] mr-4">{caseStudy.name}</h3>
                <Badge variant="outline">{caseStudy.type}</Badge>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                {caseStudy.location}
              </div>

              <p className="text-muted-foreground mb-8">
                {caseStudy.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {caseStudy.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-background/50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 text-[#902D2F] mx-auto mb-2" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Button 
                className="bg-[#902D2F] hover:bg-[#7A2528] text-white"
                size="lg"
              >
                View Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Features & Results */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
            <div>
              <h4 className="text-lg font-semibold mb-4">Key Features Implemented</h4>
              <div className="space-y-2">
                {caseStudy.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-[#902D2F] rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Results Achieved</h4>
              <div className="space-y-2">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                <p className="text-muted-foreground mb-3">{project.location}</p>
                <Badge variant="outline" className="mb-4">{project.type}</Badge>
                <div className="text-sm text-[#902D2F]">{project.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Want to Be Our Next Success Story?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the future of parking management.
          </p>
          <Button 
            size="lg" 
            className="bg-[#902D2F] hover:bg-[#7A2528] text-white px-8"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}