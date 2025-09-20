import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project 
              and bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl relative overflow-hidden">
              {/* Gradient background overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/30 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6">Start Your Project</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="bg-white/50 border-gray-200/50 focus:border-purple-300 focus:ring-purple-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-white/50 border-gray-200/50 focus:border-purple-300 focus:ring-purple-100"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <Select>
                      <SelectTrigger className="bg-white/50 border-gray-200/50 focus:border-purple-300 focus:ring-purple-100">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-design">Web Design & Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App Design</SelectItem>
                        <SelectItem value="branding">Brand Identity</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                        <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                        <SelectItem value="analytics">Analytics & Optimization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select>
                      <SelectTrigger className="bg-white/50 border-gray-200/50 focus:border-purple-300 focus:ring-purple-100">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      className="bg-white/50 border-gray-200/50 focus:border-purple-300 focus:ring-purple-100"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary text-white border-0 shadow-gradient-primary hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Whether you have a question about our services, 
                  pricing, or want to discuss your project, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-gray-600">hello@pixelforgeclub.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-gray-600">123 Design Street<br />Creative District, NY 10001</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-purple-200/50">
                <h4 className="font-semibold text-lg mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-700">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}