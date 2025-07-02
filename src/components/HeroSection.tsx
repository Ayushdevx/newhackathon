'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Hackfinity
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-light text-gray-300"
              variants={itemVariants}
            >
              Infinite Fun. Infinite Creativity.
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-purple-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              From Caffeine to Code – Experience the Best
            </motion.p>
          </motion.div>

          {/* Event Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-xl font-semibold">October 18, 2025</span>
            </div>
            
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              World's Biggest Agentic AI Hackathon
            </motion.h3>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                {inView && <CountUp end={5000} duration={2} />}+
              </div>
              <div className="text-sm text-gray-300">Participants</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <Trophy className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                ${inView && <CountUp end={100000} duration={2} separator="," />}
              </div>
              <div className="text-sm text-gray-300">Prize Pool</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                {inView && <CountUp end={50} duration={2} />}+
              </div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">48</div>
              <div className="text-sm text-gray-300">Hours</div>
            </div>
          </motion.div>

          {/* Current Sponsors Highlight */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg text-gray-300">Proudly Sponsored By</h4>
            <div className="flex items-center justify-center space-x-8">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <span className="text-xl font-bold text-white">Devfolio</span>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <span className="text-xl font-bold text-white">ETHIndia</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Sponsor
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
