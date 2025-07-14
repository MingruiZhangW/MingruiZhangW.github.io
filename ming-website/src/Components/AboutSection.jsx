import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            About <span className="font-bold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop&crop=entropy"
                alt="Mingrui Zhang"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-6">
              Engineering Digital Solutions
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a Master's in Electrical and Computer Engineering from the University of Waterloo and a Bachelor's from McGill University, I specialize in building scalable and maintainable backend systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My experience spans developing SaaS platforms on .NET and Azure, enhancing data analytic pipelines, and maintaining robust CI/CD infrastructure. I am proficient in migrating and modernizing legacy systems, such as moving from Qt Widgets to QML for multi-platform development.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am passionate about tackling complex technical challenges and contributing to the entire software development lifecycle, from design to deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}