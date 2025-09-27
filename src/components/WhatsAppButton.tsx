import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Chat',
      description: 'Chat with our team',
      action: () => window.open('https://wa.me/255123456789?text=Hello! I am interested in Smart Parking solutions.', '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Call Us',
      description: '+255 123 456 789',
      action: () => window.open('tel:+255123456789', '_self'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'info@smartparking.com',
      action: () => window.open('mailto:info@smartparking.com?subject=Smart Parking Inquiry', '_self'),
      color: 'bg-[#902D2F] hover:bg-[#7A2528]'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="glass rounded-lg p-3 text-right">
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-muted-foreground">{option.description}</div>
                </div>
                <Button
                  size="sm"
                  className={`w-12 h-12 rounded-full ${option.color} text-white shadow-lg`}
                  onClick={option.action}
                >
                  <option.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Button
          size="lg"
          className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-500 hover:bg-gray-600' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </motion.div>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 w-16 h-16 rounded-full bg-green-500 opacity-30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
}