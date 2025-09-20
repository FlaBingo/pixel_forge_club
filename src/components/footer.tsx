import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' }
    ],
    services: [
      { label: 'Web Design', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Branding', href: '#services' },
      { label: 'E-commerce', href: '#services' }
    ],
    resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'Design System', href: '#resources' },
      { label: 'Free Tools', href: '#tools' }
    ]
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">PF</span>
                </div>
                <span className="font-bold text-xl">PixelForgeClub</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Crafting exceptional digital experiences that drive results for 
                forward-thinking businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>hello@pixelforgeclub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest design trends and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PixelForgeClub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}