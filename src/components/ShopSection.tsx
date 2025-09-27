import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, MessageCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function ShopSection() {
  const products = [
    {
      id: 1,
      name: "AI Security Camera",
      category: "IP Cameras",
      price: "Tsh 777,400",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NTg5MDAyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "4K Resolution",
        "Night Vision",
        "AI Object Detection",
        "Weather Resistant",
      ],
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Boom Gate",
      category: "Access Control",
      price: "Tsh 2,077,400",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1709364531108-d0cf9db26258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2xsJTIwZ2F0ZSUyMGJvb20lMjBiYXJyaWVyfGVufDF8fHx8MTc1OTAwMDY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Remote Control",
        "Safety Sensors",
        "LED Indicators",
        "Anti-Crash System",
      ],
      inStock: true,
    },
    {
      id: 3,
      name: "Parking Sensor Kit",
      category: "Sensors",
      price: "Tsh 387,400",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVxdWlwbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAwNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Ultrasonic Detection",
        "Wireless",
        "Battery Powered",
        "Easy Installation",
      ],
      inStock: true,
    },
    {
      id: 4,
      name: "Control Panel Hub",
      category: "Controllers",
      price: "Tsh 1,037,400",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVxdWlwbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAwNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Central Management",
        "Cloud Connectivity",
        "Touch Interface",
        "24/7 Monitoring",
      ],
      inStock: false,
    },
    {
      id: 5,
      name: "LED Display Board",
      category: "Displays",
      price: "Tsh 517,400",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVxdWlwbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAwNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "High Brightness",
        "Programmable",
        "Weather Proof",
        "Energy Efficient",
      ],
      inStock: true,
    },
    {
      id: 6,
      name: "Complete Starter Kit",
      category: "Bundles",
      price: "Tsh 3,377,400",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1758186386318-42f7fb10f465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVxdWlwbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDAwNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Complete System",
        "Installation Support",
        "1-Year Warranty",
        "Training Included",
      ],
      inStock: true,
      featured: true,
    },
  ];

  const categories = [
    "All",
    "IP Cameras",
    "Access Control",
    "Sensors",
    "Controllers",
    "Displays",
    "Bundles",
  ];

  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Equipment <span className="text-[#902D2F]">Shop</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of smart parking equipment, from AI
            cameras to boom gates and everything in between.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={
                category === "All"
                  ? "bg-[#902D2F] hover:bg-[#7A2528] text-white"
                  : "border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="glass rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 space-y-2">
                {product.featured && (
                  <Badge className="bg-[#902D2F] text-white">Featured</Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              {/* Product Image */}
              <div className="relative mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-[#902D2F] rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <div className="text-sm text-[#902D2F]">
                      +{product.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-[#902D2F]">
                    {product.price}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white"
                      disabled={!product.inStock}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#902D2F] hover:bg-[#7A2528] text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For bulk orders, custom configurations, or complete system packages,
            contact our sales team for personalized pricing and professional
            installation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#902D2F] hover:bg-[#7A2528] text-white px-8"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Contact Sales
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#902D2F] text-[#902D2F] hover:bg-[#902D2F] hover:text-white px-8"
            >
              Request Catalog
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Free Shipping</strong>
                <br />
                On orders over Tsh 1,300,000
              </div>
              <div>
                <strong className="text-foreground">1-Year Warranty</strong>
                <br />
                On all equipment
              </div>
              <div>
                <strong className="text-foreground">24/7 Support</strong>
                <br />
                Technical assistance included
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
