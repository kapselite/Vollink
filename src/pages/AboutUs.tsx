import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  qualification: string;
}

interface CoreValue {
  number: string;
  title: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Makoshori Isaac',
    role: 'Business Development, Sales & Marketing',
    qualification: 'BBA in Marketing (IMM)',
  },
  {
    name: 'Tarisai Blessing Makoshori',
    role: 'Administration',
    qualification: 'BSC Hons in Science Education and Applications in Biology (UZ)',
  },
];

const coreValues: CoreValue[] = [
  {
    number: '01',
    title: 'Mutual Respect',
    description: 'We value each other, we are open and trust one another.',
  },
  {
    number: '02',
    title: 'Trust',
    description: 'We value each other, we are open and trust one another.',
  },
  {
    number: '03',
    title: 'Openness',
    description: 'We value each other, we are open and trust one another.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We are flexible, fast, and proactive in our approach to challenges and opportunities.',
  },
  {
    number: '05',
    title: 'Performance',
    description: 'We lead by example and will not accept anything but the very best in all our efforts.',
  },
  {
    number: '06',
    title: 'Innovation',
    description: 'We are flexible, fast, and proactive in our approach to challenges and opportunities.',
  },
  {
    number: '07',
    title: 'Integrity',
    description: 'We each take responsibility for honouring our commitments and obligations.',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/50 to-indigo-50/60 text-gray-800 overflow-hidden selection:bg-[#00a5d8] selection:text-white">
      
      {/* Dynamic Bright Animated Background Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, 20, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#00a5d8]/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -50, 0],
            y: [0, -30, 0] 
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#f60400]/10 rounded-full blur-[110px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-[#3c319f]/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Clean Modern Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c319f08_1px,transparent_1px),linear-gradient(to_bottom,#3c319f08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#3c319f] shadow-lg shadow-indigo-500/25 border border-white/20"
          >
            Technology, Printing & Graphics Design
          </motion.span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#3c319f]">
            About <span className="text-[#f60400]">Vollink (Pvt) Ltd</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
            Your premier partner for integrated printer, printing products, IT infrastructure, and cutting-edge design solutions under one roof.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-[#f60400] mx-auto rounded-full" 
          />
        </motion.div>

        {/* Introduction Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-white/80 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-2.5 h-full bg-[#00a5d8]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3c319f] mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#f60400] animate-pulse"></span>
            Introduction
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
            <p>
              Vollink (Pvt) Ltd is a registered company in compliance with the Zimbabwe law of companies act [chapter 24:03]. Currently, it stands as one of the leading names in the provision of printer, printing, graphic designing, and IT products and services.
            </p>
            <p>
              We are proud to be among the few—if not the first—to provide these products and services entirely under one roof. We express our profound gratitude for the opportunity to introduce Vollink (Pvt) Ltd as your new alternative supplier for renowned organizations.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-white/80 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00a5d8]/10 border border-[#00a5d8]/20 flex items-center justify-center text-[#00a5d8] mb-6 group-hover:bg-[#00a5d8] group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3c319f] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
                We commit ourselves to becoming the most preferred provider of IT, printer, and printing products and services throughout Zimbabwe and the Sub-Saharan region.
              </p>
            </div>
            <div className="mt-8 w-full h-1 bg-[#00a5d8]/30 rounded-full" />
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-white/80 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f60400]/10 border border-[#f60400]/20 flex items-center justify-center text-[#f60400] mb-6 group-hover:bg-[#f60400] group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3c319f] mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4 font-normal">We aim to run a dynamic and vibrant business through:</p>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#f60400] shrink-0" />
                  <span>Total commitment to excellence by getting things right the first time, all the time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#f60400] shrink-0" />
                  <span>Clearly understanding and satisfying customer needs affordably and sustainably.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#f60400] shrink-0" />
                  <span>Being more proactive, innovative, and pioneering than any competitor.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 w-full h-1 bg-[#f60400]/30 rounded-full" />
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#f60400] shadow-md shadow-red-500/20">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c319f]">Core Values</h2>
            <p className="max-w-xl mx-auto text-gray-600 text-sm sm:text-base font-normal">
              The values we subscribe to are a way of showing commitment to the culture we are in the process of instilling in all our stakeholders.
            </p>
            <div className="w-16 h-1 bg-[#00a5d8] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-indigo-50 hover:border-[#00a5d8] transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400]" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-[#3c319f]/10 text-[#3c319f] font-extrabold flex items-center justify-center text-sm shadow-sm border border-indigo-100 group-hover:bg-[#f60400] group-hover:text-white transition-colors duration-300">
                      {value.number}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-[#00a5d8]/40 group-hover:bg-[#00a5d8] transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-[#3c319f] group-hover:text-[#f60400] transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management Team Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#3c319f] shadow-md shadow-indigo-500/20">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c319f]">The Management Team</h2>
            <div className="w-16 h-1 bg-[#00a5d8] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Accent glow on card */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00a5d8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Avatar Icon */}
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#00a5d8] via-[#3c319f] to-[#f60400] p-1 mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-[#3c319f]">
                    <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#3c319f] mb-2">{member.name}</h3>
                <p className="text-[#00a5d8] font-semibold text-base mb-4">{member.role}</p>
                <p className="text-[#f60400] text-xs font-semibold bg-red-50 px-4 py-2 rounded-full border border-red-100 shadow-sm">
                  {member.qualification}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};