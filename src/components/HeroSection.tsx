import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play, Zap, Car, Eye } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709364531162-6e613646afa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBhcmtpbmclMjBhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAwNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Smart Parking Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 glass rounded-full p-6"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {/* <Zap className="w-8 h-8 text-[#902D2F]" /> */}
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 glass rounded-full p-4"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        {/* <Car className="w-6 h-6 text-[#902D2F]" /> */}
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 glass rounded-full p-4"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      >
        {/* <Eye className="w-6 h-6 text-[#902D2F]" /> */}
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#902D2F] to-[#B83A3F] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-powered Toll & Parking Management for the Future
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionize your parking operations with our intelligent system that integrates IP cameras, toll boom gates, and real-time AI decision-making for seamless vehicle management.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-[#902D2F] hover:bg-[#7A2528] text-white px-8 py-3 rounded-full"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white px-8 py-3 rounded-full"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '10K+', label: 'Cars Managed' },
              { value: '<2s', label: 'Processing Time' },
              { value: '24/7', label: 'AI Monitoring' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-[#902D2F]">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#902D2F] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#902D2F] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}