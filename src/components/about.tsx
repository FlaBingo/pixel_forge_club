import { Card } from './ui/card';
import { Target, Users, Zap, Trophy } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { AnimatedCounter } from './animated-counter';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Strategic Design',
      description: 'Every pixel serves a purpose. We create designs that align with your business goals.'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'We put your users first, creating intuitive experiences that convert.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.'
    },
    {
      icon: Trophy,
      title: 'Award-Winning',
      description: 'Our work has been recognized by industry leaders and design communities.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About PixelForgeClub</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of designers, developers, and strategists dedicated to 
              creating digital experiences that make a lasting impact. Founded in 2019, we've 
              helped brands across industries transform their digital presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 200} direction="up">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="bg-card rounded-2xl p-8 lg:p-12 border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower businesses with exceptional digital experiences that drive growth, 
                  engagement, and success. We believe that great design isn't just about how 
                  something looks—it's about how it works and the impact it creates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Custom design solutions tailored to your brand</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Collaborative approach with transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Ongoing support and maintenance</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <AnimatedCounter end={200} suffix="+" />
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={50} suffix="+" />
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={15} suffix="+" />
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={5} suffix="+" />
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}