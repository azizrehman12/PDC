import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Scale, Shield, Users, Target } from 'lucide-react';

const Constitution = () => {
  const principles = [
    {
      icon: Scale,
      title: 'Justice & Equality',
      description: 'Ensuring fair treatment and equal opportunities for all society members and students'
    },
    {
      icon: Shield,
      title: 'Protection of Rights',
      description: 'Safeguarding the fundamental rights and dignity of every student member'
    },
    {
      icon: Users,
      title: 'Democratic Participation',
      description: 'Promoting inclusive decision-making and active student participation in society affairs'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Governance',
      description: 'Structured approach to achieving our academic and cultural mission and objectives'
    }
  ];

  const sections = [
    { title: 'Preamble', description: 'Our founding principles and educational purpose' },
    { title: 'Student Membership', description: 'Rights, responsibilities, and enrollment requirements' },
    { title: 'Leadership Structure', description: 'Student roles, elections, and governance framework' },
    { title: 'Meetings & Procedures', description: 'Academic year guidelines and operational protocols' },
    { title: 'Academic Standards', description: 'Educational requirements and performance expectations' },
    { title: 'Cultural Activities', description: 'Traditional events and cultural preservation guidelines' },
    { title: 'Amendments', description: 'Process for constitutional changes and updates' },
    { title: 'Code of Conduct', description: 'Ethical standards and student behavior expectations' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-900 via-green-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50a40 40 0 1 1 0-80 40 40 0 0 1 0 80zm0-60a20 20 0 1 0 0 40 20 20 0 0 0 0-40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-yellow-400">Constitution</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            The foundation of our society governance, outlining our principles, structure, and commitment to our student community.
          </motion.p>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core values that shape our society governance and student-centered decision-making processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                >
                  <principle.icon className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution Sections */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Constitution Sections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of all aspects of our society's organizational structure and student governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-32 h-32 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Download className="w-16 h-16 text-yellow-400" />
              </motion.div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Download Our Constitution
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
              Access the complete PDC Constitution document. Available for download in PDF format for your reference and review.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                View Online
              </motion.button>
            </div>
            
            <p className="text-sm text-green-200">
              Last updated: January 2025 | Version 3.2
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Constitution;