
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TypedComponent from '@/components/TypedComponent';
import ParticleBackground from '@/components/ParticleBackground';
import LoadingScreen from '@/components/LoadingScreen';
import ModernNavbar from '@/components/ModernNavbar';
import ProfileSection from '@/components/ProfileSection';
import CreativeSkills from '@/components/CreativeSkills';
import CodingPlatforms from '@/components/CodingPlatforms';
import FeaturedProjects from '@/components/FeaturedProjects';
import EducationSection from '@/components/EducationSection';
import ProfilePhoto from '@/components/ProfilePhoto';
import EmailJSContactForm from '@/components/EmailJSContactForm';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = 'hsl(210, 40%, 8%)';
    document.body.style.color = 'hsl(213, 31%, 91%)';
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-navy-dark text-text-primary">
      <ParticleBackground />
      
      {/* Modern Navigation */}
      <ModernNavbar scrollToSection={scrollToSection} />

      {/* Hero Section - Updated with Profile Photo */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="text-center z-10 px-4">
          {/* Profile Photo */}
          <ProfilePhoto />
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent-teal to-accent-sky bg-clip-text text-transparent"
          >
            ASRAF  A
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl mb-6 text-accent-teal min-h-[1.5rem]"
          >
            <TypedComponent />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base mb-8 max-w-2xl mx-auto text-text-secondary"
          >
            Final year BTech IT student passionate about crafting innovative solutions through code. 
            Transforming ideas into digital reality with modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-accent-teal to-accent-sky hover:from-accent-teal/80 hover:to-accent-sky/80 text-navy-dark px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="border-2 border-accent-teal hover:border-accent-sky text-accent-teal hover:text-accent-sky px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-accent-teal/10"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="p-2 rounded-full bg-navy-medium/50 backdrop-blur-sm border border-navy-medium">
            <ChevronDown className="h-5 w-5 text-accent-teal" />
          </div>
        </motion.div>
      </section>

      {/* Profile Section */}
      <ProfileSection />

      {/* Education Section */}
      <EducationSection />

      {/* Creative Skills Section */}
      <CreativeSkills />

      {/* Coding Platforms Section */}
      <CodingPlatforms />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Contact Section - Replaced with EmailJS Form */}
      <EmailJSContactForm />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-accent-teal to-accent-sky rounded-full text-navy-dark shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
