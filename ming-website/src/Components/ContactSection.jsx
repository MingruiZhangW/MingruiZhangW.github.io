
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Check } from 'lucide-react';

export default function ContactSection() {
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({...prev, [key]: true}));
      setTimeout(() => {
        setCopiedStates(prev => ({...prev, [key]: false}));
      }, 2000);
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (514) 571-4228',
      copyText: '+15145714228'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'mingrui.zhang@mail.mcgill.ca',
      copyText: 'mingrui.zhang@mail.mcgill.ca'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Let's <span className="font-bold">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
              Feel free to reach out if you have any questions or just want to say hello!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-2">{info.title}</h4>
                    <button
                      onClick={() => handleCopy(info.copyText, info.title)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${copiedStates[info.title] ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300'}`}
                      title={`Copy ${info.title}`}
                    >
                      {copiedStates[info.title] ? (
                        <span className="flex items-center font-semibold">
                          <Check className="w-4 h-4 mr-2" /> Copied!
                        </span>
                      ) : (
                        <span>{info.details}</span>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Let's Work Together</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or simply want to connect, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-sm">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-sm">
                  Cloud Solutions
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-sm">
                  System Architecture
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium shadow-sm">
                  DevOps & CI/CD
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
