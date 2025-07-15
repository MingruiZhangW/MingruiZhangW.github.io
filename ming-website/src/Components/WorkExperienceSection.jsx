import { motion } from 'framer-motion';
import { Building, Calendar } from 'lucide-react';

export default function WorkExperienceSection() {
  const experiences = [
    {
      role: 'Back End Developer',
      company: 'Montrium',
      period: 'MAY. 2023 - Present',
      description: [
        "Participated in developing and maintaining Montrium's Connect SaaS platform digital solution, built on .NET and Microsoft Azure.",
        'Helped to design and maintain a new data analytic pipeline that provides users the ability to retrieve their audit trail efficiently.',
        "Maintained and created Azure DevOps CI & CD pipelines. Defined the bicep scripts for the client's resources release.",
        'Contributed to the design and development of a new data backup solution within the updated infrastructure.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Savoir-faire Linux',
      period: 'MAR. 2019 - DEC. 2021',
      description: [
        'Improved the existing Windows client and developed new features corresponding to the changes in the daemon under the existing C++ technology stack.',
        'Participated in migrating the Windows client development from Qt Widget modules to QML which is a declarative UI language module.',
        "Maintained the Jenkins CI & CD pipeline and wrote the groovy scripts for the client's beta release job.",
        'Restructured the existing Wix project for better installer appearance and optimized the existing installation sequences.'
      ]
    },
    {
      role: 'Automation Developer Intern',
      company: 'E-Innovation',
      period: 'MAR. 2017 - AUG. 2017',
      description: [
        'Cooperated with a Mechanical Engineering student to automate the sealing and taping progress of making a new type of electrode.',
        'Designed a system based on 3D printed parts and circuits controlled by certain logic uploaded in the Arduino Uno logic board.',
        'Wrote Arduino code and designed circuits by using electronic devices which include step motor, motor driver, switches, relays, etc.'
      ]
    }
  ];

  return (
    <section id="work-experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            My <span className="font-bold">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-slate-200 hidden lg:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex flex-col lg:flex-row items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 -ml-4 w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-10 hidden lg:block"></div>
                
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                  <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-slate-900">{exp.role}</h3>
                      <div className="flex items-center space-x-4 text-slate-600 mt-2">
                        <span className="flex items-center"><Building className="w-4 h-4 mr-2" />{exp.company}</span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 list-disc list-outside text-slate-700 pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}