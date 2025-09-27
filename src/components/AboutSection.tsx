import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Users, Zap } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize parking and toll management through cutting-edge AI technology, making urban mobility seamless and efficient.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading provider of smart mobility solutions across Africa and beyond, creating smarter cities for the future.'
    },
    {
      icon: Users,
      title: 'Our Expertise',
      description: 'Deep expertise in AI, computer vision, IoT integration, and smart city infrastructure with a proven track record.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous innovation in AI algorithms, real-time processing, and seamless hardware-software integration.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#902D2F]">Smart Parking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are pioneers in AI-powered parking and toll management systems, dedicated to transforming how vehicles move through modern infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756701781600-12a63ab571fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMHNtYXJ0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkwMDA2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart Technology"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-lg p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-xl font-bold text-[#902D2F]">5+ Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-lg p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="text-xl font-bold text-[#902D2F]">100%</div>
              <div className="text-sm text-muted-foreground">AI Powered</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Leading the Future of Smart Mobility</h3>
            <p className="text-muted-foreground mb-6">
              Smart Parking combines advanced artificial intelligence, computer vision, and IoT technologies to create comprehensive parking and toll management solutions. Our systems are designed to handle high-traffic environments with precision and reliability.
            </p>
            <p className="text-muted-foreground mb-8">
              From shopping malls to airports, universities to city centers, our technology adapts to any environment, providing real-time insights, automated decision-making, and seamless user experiences.
            </p>
            
            <div className="space-y-4">
              {[
                'Real-time AI processing and decision making',
                'Seamless integration with existing infrastructure',
                'Scalable solutions for any environment size',
                'Advanced analytics and reporting'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#902D2F] rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#902D2F] to-[#B83A3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}