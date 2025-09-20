import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Search, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { TiltCard } from './tilt-card';
import { RippleButton } from './ripple-button';

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Custom websites that look stunning and perform flawlessly across all devices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
      price: 'Starting at $2,500',
      gradient: 'bg-gradient-primary',
      shadowClass: 'shadow-gradient-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile applications with intuitive user experiences.',
      features: ['iOS & Android', 'UI/UX Design', 'Prototyping', 'App Store Optimization'],
      price: 'Starting at $5,000',
      gradient: 'bg-gradient-secondary',
      shadowClass: 'shadow-gradient-secondary'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity packages that make your business stand out.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
      price: 'Starting at $1,500',
      gradient: 'bg-gradient-warm',
      shadowClass: 'shadow-gradient-warm'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Online stores that drive sales with optimized checkout experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimized'],
      price: 'Starting at $3,500',
      gradient: 'bg-gradient-success',
      shadowClass: 'shadow-gradient-primary'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility and drive more qualified traffic to your site.',
      features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Analytics'],
      price: 'Starting at $800/month',
      gradient: 'bg-gradient-ocean',
      shadowClass: 'shadow-gradient-secondary'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to improve your digital performance and ROI.',
      features: ['Performance Tracking', 'A/B Testing', 'Conversion Optimization', 'Reporting'],
      price: 'Starting at $1,200/month',
      gradient: 'bg-gradient-aurora',
      shadowClass: 'shadow-gradient-warm'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions 
              tailored to your business needs and goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <TiltCard>
                <Card className="p-6 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 bg-white/80 backdrop-blur-sm border border-white/50 relative overflow-hidden">
                  {/* Service gradient background on hover */}
                  <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transform duration-300 ${service.shadowClass}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="font-semibold mb-3 text-lg">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gradient-primary font-semibold">{service.price}</span>
                        <Button variant="ghost" size="sm" className="group/btn hover:bg-gradient-primary hover:text-white transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need a custom solution? We'd love to discuss your project.
            </p>
            <RippleButton size="lg" className="bg-gradient-primary text-white border-0 shadow-gradient-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Custom Quote
            </RippleButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}