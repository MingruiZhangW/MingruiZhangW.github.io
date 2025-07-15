
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'mingrui.zhang@mail.mcgill.ca';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mingrui Zhang</h3>
            <p className="text-slate-400 leading-relaxed">
              Software Developer passionate about engineering robust and scalable digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('interests')} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Interests
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('work-experience')} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Work Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mingruizhangee/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                title="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={'../../Resources/Pdf/Resume Mingrui Zhang.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                title="View Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" /></svg>
              </a>
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Mail className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-700 text-white text-sm rounded-md shadow-lg whitespace-nowrap"
                    >
                        Email Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>© 2024 Mingrui Zhang. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
