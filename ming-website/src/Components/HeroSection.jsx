
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown, Github, Linkedin, Mail, Check } from 'lucide-react';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'mingrui.zhang@mail.mcgill.ca';

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-56 h-56 mx-auto mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl" />
            <img
              src={'../../Resources/Image/profile.jpg'}
              alt="Profile"
              className="relative w-56 h-56 object-cover rounded-full shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ zIndex: 1 }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight"
        >
          Hello, I'm{' '}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mingrui Zhang
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Software Developer | Back End Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
        >
          I build and maintain robust digital solutions, from SaaS platforms to data analytic pipelines, 
          with a focus on clean architecture and efficient performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            onClick={() => scrollToSection('work-experience')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let's Connect
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://www.linkedin.com/in/mingruizhangee/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            title="Linkedin"
          >
            <Linkedin className="w-6 h-6 text-slate-700" />
          </a>
          <a
            href={'../../Resources/Pdf/Resume Mingrui Zhang.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            title="View Resume"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" /></svg>
          </a>
          <div className="relative">
            <button
              onClick={handleCopy}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              title="Copy Email"
            >
              {copied ? <Check className="w-6 h-6 text-green-600" /> : <Mail className="w-6 h-6 text-slate-700" />}
            </button>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-md shadow-lg whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
