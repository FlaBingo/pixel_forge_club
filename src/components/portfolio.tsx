import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './scroll-reveal';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow Dashboard',
      category: 'web',
      description: 'A comprehensive analytics dashboard for SaaS companies with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4MzE1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Charts'],
      link: '#',
      gradient: 'bg-gradient-primary'
    },
    {
      id: 2,
      title: 'FitTracker Mobile App',
      category: 'mobile',
      description: 'Fitness tracking app with personalized workout plans and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Health', 'UI/UX'],
      link: '#',
      gradient: 'bg-gradient-secondary'
    },
    {
      id: 3,
      title: 'GreenLeaf Brand Identity',
      category: 'branding',
      description: 'Complete brand identity for an eco-friendly startup including logo and guidelines.',
      image: 'https://images.unsplash.com/photo-1670341445726-8a9f4169da8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg5ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Branding', 'Logo', 'Identity'],
      link: '#',
      gradient: 'bg-gradient-success'
    },
    {
      id: 4,
      title: 'ShopEasy E-commerce',
      category: 'web',
      description: 'Modern e-commerce platform with advanced filtering and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4MzE1MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['E-commerce', 'Next.js', 'Stripe'],
      link: '#',
      gradient: 'bg-gradient-warm'
    },
    {
      id: 5,
      title: 'MediCare App Interface',
      category: 'mobile',
      description: 'Healthcare app for appointment booking and patient management.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Healthcare', 'UI/UX', 'Flutter'],
      link: '#',
      gradient: 'bg-gradient-ocean'
    },
    {
      id: 6,
      title: 'Artisan Coffee Brand',
      category: 'branding',
      description: 'Brand identity and packaging design for premium coffee roaster.',
      image: 'https://images.unsplash.com/photo-1670341445726-8a9f4169da8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg5ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Packaging', 'Brand', 'Coffee'],
      link: '#',
      gradient: 'bg-gradient-aurora'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient-secondary">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              transform their digital presence with innovative design solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id)}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  filter === category.id 
                    ? 'bg-gradient-primary text-white border-0 shadow-gradient-primary' 
                    : 'border-gradient-primary hover:bg-gradient-primary hover:text-white'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} direction="up">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 bg-white/80 backdrop-blur-sm border border-white/50 relative">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center`}>
                    <Button variant="secondary" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white/90 hover:bg-gradient-cool hover:!text-white text-gray-900 shadow-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/40 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold mb-2 text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="group/btn p-0 hover:bg-gradient-primary transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to see more of our work or discuss your project?
            </p>
            <Button size="lg" className="bg-gradient-secondary text-white border-0 shadow-gradient-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View All Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}