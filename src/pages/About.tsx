import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      content: 'To empower Pakhtoon students through academic excellence, cultural preservation, leadership development, and unity-building initiatives that create lasting positive impact in university life.'
    },
    {
      icon: Eye,
      title: 'Vision',
      content: 'A thriving, united Pakhtoon student community where tradition meets academic progress, and every member has the opportunity to reach their full potential in their educational journey.'
    },
    {
      icon: Award,
      title: 'Excellence',
      content: 'We maintain the highest standards in academic support, cultural programs, and student services, ensuring quality, integrity, and accountability in every initiative we undertake.'
    },
    {
      icon: Users,
      title: 'Community',
      content: 'Building bridges between students, fostering meaningful connections, and creating a supportive network that strengthens our collective voice and academic impact.'
    }
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
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-yellow-400">PDC Society</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            A premier university society dedicated to fostering academic growth, preserving Pakhtoon culture, and building stronger student communities through unity and purpose.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <value.icon className="w-10 h-10 text-yellow-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="text-green-700">Society Journey</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Pakhtoon Development Council Society was founded with a vision to bridge tradition and academic progress, 
                  creating opportunities for students while honoring our rich cultural heritage. What began as a small 
                  student initiative has grown into a powerful force for positive change in university life.
                </p>
                <p>
                  Through years of dedicated service, we have supported academic excellence, organized cultural events, 
                  preserved traditional practices, and created platforms for student dialogue and collaboration. 
                  Our journey reflects the resilience and determination of Pakhtoon students.
                </p>
                <p>
                  Today, PDC Society continues to evolve, embracing educational innovation while staying true to our core values 
                  of unity, integrity, and academic service. We look forward to writing the next chapter of our 
                  story together with our student community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400">Key Achievements</h3>
                  <div className="space-y-4">
                    {[
                      'Established 20+ student support programs',
                      'Supported 800+ students academically',
                      'Organized 50+ cultural events',
                      'Built partnerships with 10+ universities',
                      'Created scholarship opportunities for 100+ students',
                      'Maintained 95% student satisfaction rate'
                    ].map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
              Your voice, ideas, and participation help shape the future of our community. 
              Together, we can achieve extraordinary things.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
            >
              Join Our Mission
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;