import { motion } from 'framer-motion';
import { Badge } from './ui/Badge';
import { Award, Code, Cloud, Settings } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C#', 'C++', 'Python', 'JavaScript', 'C']
    },
    {
      title: 'Backend & Cloud',
      icon: Cloud,
      skills: ['.NET', 'Microsoft Azure', 'Node.js', 'REST APIs', 'SQL & NoSQL']
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Azure DevOps', 'Bicep', 'Jenkins', 'CMake', 'AI IDEs']
    }
  ];

  const certifications = [
    {
      name: "AZ-400: DevOps Engineer Expert",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/MingruiZhang-3029/199CA1209FBD6839?sharingId=24B59E6AA80222F0"
    },
    {
      name: "AZ-204: Azure Developer Associate", 
      link: "https://learn.microsoft.com/api/credentials/share/en-us/MingruiZhang-3029/D7955010A8363AB7?sharingId=24B59E6AA80222F0"
    },
    {
      name: "AZ-900: Azure Fundamentals",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/MingruiZhang-3029/907FA235A32AB3DF?sharingId=24B59E6AA80222F0"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            My <span className="font-bold">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                  >
                    <Badge 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800 transition-all duration-500 cursor-default px-4 py-2 text-sm font-medium border border-slate-200 hover:border-slate-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto group">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Certifications</h3>
            <div className="flex flex-col justify-center items-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Badge className="bg-green-50 text-green-800 text-base px-6 py-3 rounded-xl border border-green-200 shadow-sm hover:shadow-lg hover:bg-green-100 transition-all duration-500 cursor-pointer">
                      <Award className="w-4 h-4 mr-2"/>
                      {cert.name}
                    </Badge>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}