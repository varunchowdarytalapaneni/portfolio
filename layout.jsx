import React, { useState, useEffect } from "react";
import { createPageUrl } from "@/utils";
import { Moon, Sun, Menu, X, Home, User, Briefcase, Code, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "#hero", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Projects", url: "#projects", icon: Code },
  { title: "Experience", url: "#experience", icon: Briefcase },
  { title: "Achievements", url: "#achievements", icon: Award },
  { title: "Contact", url: "#contact", icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load persisted theme (user preference wins over system)
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    navigationItems.forEach(item => {
      const sectionId = item.url.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (url) => {
    const sectionId = url.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-slate-900' : 'bg-white'
    }`}>
      <style>
        {`
          :root {
            --primary-slate: #0f172a;
            --secondary-white: #ffffff;
            --accent-teal: #0891b2;
            --neutral-50: #f8fafc;
            --neutral-200: #e2e8f0;
            --neutral-600: #64748b;
            --success-emerald: #059669;
          }
          
          .dark {
            --primary-slate: #ffffff;
            --secondary-white: #0f172a;
            --neutral-50: #1e293b;
            --neutral-200: #334155;
          }

          .glass-morphism {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .dark .glass-morphism {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(148, 163, 184, 0.2);
          }

          .gradient-text {
            background: linear-gradient(135deg, var(--accent-teal), #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .scroll-smooth {
            scroll-behavior: smooth;
          }
        `}
      </style>
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.url)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.url.replace('#', '')
                      ? 'text-teal-500 bg-teal-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full hover:bg-white/10"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-slate-300" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600" />
                )}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden w-9 h-9 rounded-full hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.url)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    activeSection === item.url.replace('#', '')
                      ? 'text-teal-500 bg-teal-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
