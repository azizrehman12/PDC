import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Users, Calendar, Award, Shield, Heart, Trophy, Camera } from 'lucide-react';

const Leadership = () => {
  const currentLeadership = [
    {
      name: 'Mushtaq Turi',
      role: 'President',
      image: 'public/mushtaq.jpg',
      description: 'Leading the society with vision and dedication to student welfare and academic excellence.',
      tenure: '2023 - Present'
    },
    {
      name: 'Fahad',
      role: 'General Secretary',
      image: 'public/Fahad.jpg',
      description: 'Coordinating society activities and ensuring smooth operations across all departments.',
      tenure: '2024 - Present'
    }
  ];

  const exPresidents = [
    {
      name: 'Haider Turi',
      tenure: '2023 - 2024',
      image: 'public/Haider.jpg',
      achievements: 'Established mentorship programs and enhanced student engagement activities'
    },
    {
      name: 'Sahal Shah',
      tenure: '2022 - 2023',
      image: 'Salah.jpg',
      achievements: 'President'
    },
    {
      name: 'Muhammad ali',
      tenure: '2021 - 2022',
      image: 'Usman.png',
      achievements: 'Gerenal Secretary'
    },
   
  ];

  const exGeneralSecretaries = [
    {
      name: 'Ali Ahmed',
      tenure: '2024 - 2025',
      image: 'ALI 1.png',
      achievements: 'Education and Information Secretary'
    },
    {
      name: 'Haibat Ullah Tareen',
      tenure: '2024 - 2025',
      image: 'Haibat.png',
      achievements: 'Bood Secretary'
    },
    {
      name: 'Muhammad Hamza Khan',
      tenure: '2024 - 2025',
      image: 'Hamza.jpg',
      achievements: 'Media Secretary'
    },
    {
      name: 'Hakim Zaman',
      tenure: '2024 - 2025',
      image: 'Hakim.jpg',
      achievements: 'Management Secreatary'
    },
    {
      name: 'Mahad Ullah',
      tenure: '2024 - 2025',
      image: 'Mahad Ullah.jpg',
      achievements: 'Finance Secretary'
    },
  ];

  const cabinet = [
    { name: 'Finance Secretary', member: 'Mikail Khan', icon: Award },
    { name: 'Event Secretary', member: 'M.Salah Uddin', icon: Calendar },
    { name: 'Education and Information Secretary', member: 'Asmat Ullah', icon: Star },
    { name: 'Sports Secretary', member: 'Huzifa Khan', icon: Trophy },
    { name: 'Media Secretary', member: 'Hassan Khan', icon: Camera },
    { name: 'Blood Bank Secretary', member: 'Hasseb ur Rehman', icon: Heart },
    { name: 'Hostel Representative', member: 'Safyan Malik', icon: Users },
    { name: 'Afghan Community Representative', member: 'Kamran Khan', icon: Users }
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
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-96 h-96 border border-white/20 rounded-full absolute top-20 -right-48"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="w-80 h-80 border border-yellow-400/20 rounded-full absolute bottom-20 -left-40"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-yellow-400">Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the dedicated students and alumni guiding our society towards academic excellence and cultural preservation.
          </motion.p>
        </div>
      </section>

      {/* Current Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading with vision, integrity, and unwavering commitment to our student community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {currentLeadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative mb-6"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-32 h-32 rounded-full object-cover shadow-xl"
                      />
                      <div className="absolute -top-2 -right-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <Crown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {leader.role}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{leader.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-green-700">
                      <Calendar className="w-4 h-4" />
                      <span>{leader.tenure}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ex-Presidents */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Former Presidents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honoring the legacy of student leaders who paved the way for our society's growth
            </p>
          </motion.div>

          <div className="space-y-8">
            {exPresidents.map((president, index) => (
              <motion.div
                key={president.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <img
                      src={president.image}
                      alt={president.name}
                      className="w-48 h-48 rounded-2xl object-cover shadow-2xl mx-auto"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {president.tenure}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{president.name}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">{president.achievements}</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-green-700 font-semibold">Distinguished Service</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ex-General Secretaries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Former General Secretaries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognizing the dedicated administrators who ensured smooth operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exGeneralSecretaries.map((secretary, index) => (
              <motion.div
                key={secretary.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mb-4"
                  >
                    <img
                      src={secretary.image}
                      alt={secretary.name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto"
                    />
                    <div className="absolute -top-1 -right-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{secretary.name}</h3>
                  <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {secretary.tenure}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{secretary.achievements}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cabinet Members
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team working across various departments to serve student needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinet.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-green-700 font-medium">{member.member}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Leadership;