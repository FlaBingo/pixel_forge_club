import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "PixelForgeClub transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The new website increased our conversions by 150%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GreenTech",
      company: "GreenTech Solutions",
      content: "Working with PixelForgeClub was a game-changer. They didn't just design a website; they created a digital experience that perfectly represents our brand values and drives real results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, FashionForward",
      company: "FashionForward",
      content: "The mobile app design they created for us is absolutely stunning. User engagement increased by 200% since launch. Their team truly understands modern design principles.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Co-founder, HealthPlus",
      company: "HealthPlus",
      content: "PixelForgeClub delivered beyond our wildest expectations. The e-commerce platform they built for us is not only beautiful but also incredibly functional. Sales have tripled!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Slower auto-rotate for better performance
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000); // Increased from 5000ms
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-gradient-warm">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders and 
              successful entrepreneurs say about working with PixelForgeClub.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl">
              {/* Background decoration with gradients */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100/50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              {/* Quote icon with gradient */}
              <div className="relative mb-6">
                <Quote className="w-12 h-12 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" />
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
                <div className="lg:col-span-2">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <blockquote className="text-lg lg:text-xl mb-6 leading-relaxed">
                    "{currentTestimonial.content}"
                  </blockquote>
                  
                  {/* Author info */}
                  <div>
                    <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                    <div className="text-gray-600">{currentTestimonial.role}</div>
                    <div className="text-sm text-gradient-primary">{currentTestimonial.company}</div>
                  </div>
                </div>
                
                {/* Author avatar */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <ImageWithFallback
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                    {/* Avatar glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl scale-110"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 border-gradient-primary hover:bg-gradient-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-primary scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 border-gradient-primary hover:bg-gradient-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Client logos */}
        <ScrollReveal delay={600}>
          <div className="mt-16 pt-16 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-8">
              Trusted by industry leaders and innovative startups
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['TechStart', 'GreenTech', 'FashionForward', 'HealthPlus', 'InnovateCorp'].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-600 hover:text-gradient-primary hover:scale-105 transition-all duration-300 cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}