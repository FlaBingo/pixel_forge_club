import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypingAnimation } from './typing-animation';
import { AnimatedCounter } from './animated-counter';
import { ScrollReveal } from './scroll-reveal';
import { RippleButton } from './ripple-button';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-indigo-400/10 animate-pulse"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200/50 shadow-lg">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">Digital Design Agency</span>
              </div>
            </ScrollReveal>
            
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={400}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  We Forge 
                  <span className="text-gradient-primary"> Digital</span>
                  <br />
                  <TypingAnimation 
                    words={['Experiences', 'Solutions', 'Innovation', 'Success']}
                    className="text-gradient-secondary"
                  />
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={600}>
                <p className="text-xl text-gray-600 max-w-lg">
                  PixelForgeClub crafts stunning websites, mobile apps, and digital experiences 
                  that drive results for forward-thinking businesses.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <RippleButton size="lg" className="group bg-gradient-primary text-white border-0 shadow-gradient-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </RippleButton>
                <RippleButton variant="outline" size="lg" className="border-gradient-primary hover:bg-gradient-secondary hover:!text-white transition-all duration-300">
                  Start Your Project
                </RippleButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1000}>
              <div className="flex items-center space-x-8 text-sm">
                <div className="text-center">
                  <AnimatedCounter end={200} suffix="+" />
                  <div className="text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={50} suffix="+" />
                  <div className="text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={5} suffix=" Years" />
                  <div className="text-gray-500">Experience</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={600}>
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwdGVhbXxlbnwxfHx8fDE3NTgzMzY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital workspace team"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/50"
                />
              </div>
              {/* Gradient glow effects */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}