import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Portfolio } from './components/portfolio';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { FloatingElements } from './components/floating-elements';
import { CursorTrail } from './components/cursor-trail';
import { InteractiveParticles } from './components/interactive-particles';
import { ThemeSwitcher } from './components/theme-switcher';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <CursorTrail />
      <InteractiveParticles />
      <FloatingElements />
      <ThemeSwitcher />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}