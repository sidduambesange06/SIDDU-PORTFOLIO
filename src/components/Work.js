import React, { useState } from 'react';
// motion 
import { motion, AnimatePresence } from 'framer-motion';
// icons
import { FaRocket, FaCheckCircle, FaClock, FaTimes, FaChevronDown } from 'react-icons/fa';

import { fadeIn } from '../variants';

const Work = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className='section' id='work'>
      <div className='container mx-auto flex flex-col justify-center items-center py-16 pb-32'>
        
        {/* Section Header */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-12'
        >
          <h2 className='h2 leading-tight text-accent mb-4 relative z-10'>
            Innovation Showcase
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-white/80'>
            Building breakthrough technologies at the intersection of AI, edge computing, and real-world applications
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-x-6 justify-center items-stretch w-full max-w-5xl px-4 lg:px-0'>

          {/* DRISHTI AR CARD */}
          <motion.div
            variants={fadeIn('right', 0.2)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div 
              onClick={() => toggleCard('drishti')}
              className='group relative border-2 border-accent/50 rounded-xl bg-gradient-to-br from-primary via-primary to-accent/10 p-6 cursor-pointer hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20'
            >
              {/* Compact Preview */}
              <div className='flex items-center gap-2 mb-4'>
                <span className='px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full flex items-center gap-1'>
                  <FaRocket className='text-xs' /> ACTIVE PROTOTYPE
                </span>
                <span className='px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex items-center gap-1'>
                  <FaCheckCircle className='text-xs' /> REGISTERED
                </span>
              </div>

              <h3 className='text-2xl sm:text-3xl font-primary font-bold text-white mb-2'>
                🥽 Drishti AR
              </h3>
              <p className='text-accent font-semibold mb-4 text-base sm:text-lg'>
                AI-First Smart Glasses
              </p>

              <p className='text-white/80 mb-6 text-sm'>
                Transform how humans interact with digital information by embedding intelligence directly into their line of sight. Real-time spatial intelligence with on-device AI.
              </p>

              <div className='flex items-center justify-between'>
                <span className='text-accent text-sm font-semibold'>November 2025 Target</span>
                <FaChevronDown className={`text-accent transition-transform duration-300 ${expandedCard === 'drishti' ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </motion.div>

          {/* SMART CITY CARD */}
          <motion.div
            variants={fadeIn('left', 0.2)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div 
              onClick={() => toggleCard('smartcity')}
              className='group relative border-2 border-blue-500/50 rounded-xl bg-gradient-to-br from-primary via-primary to-blue-500/10 p-6 cursor-pointer hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20'
            >
              {/* Compact Preview */}
              <div className='flex items-center gap-2 mb-4'>
                <span className='px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full flex items-center gap-1'>
                  <FaClock className='text-xs' /> TRAINING PHASE
                </span>
                <span className='px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full'>
                  NVIDIA
                </span>
              </div>

              <h3 className='text-2xl sm:text-3xl font-primary font-bold text-white mb-2'>
                🏙 Smart City Intelligence
              </h3>
              <p className='text-blue-400 font-semibold mb-4 text-base sm:text-lg'>
                Urban AI Infrastructure Platform
              </p>

              <p className='text-white/80 mb-6 text-sm'>
                Transform existing urban infrastructure into intelligent systems. Retrofit any camera into AI-enabled sensors using custom edge compute modules powered by NVIDIA Jetson.
              </p>

              <div className='flex items-center justify-between'>
                <span className='text-blue-400 text-sm font-semibold'>Q1-Q2 2026 Pilots</span>
                <FaChevronDown className={`text-blue-400 transition-transform duration-300 ${expandedCard === 'smartcity' ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* EXPANDED MODAL */}
        <AnimatePresence>
          {expandedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
              onClick={() => setExpandedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-4 sm:p-8 ${
                  expandedCard === 'drishti' 
                    ? 'bg-gradient-to-br from-primary via-primary to-accent/20 border-2 border-accent' 
                    : 'bg-gradient-to-br from-primary via-primary to-blue-500/20 border-2 border-blue-500'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setExpandedCard(null)}
                  className='absolute top-4 right-4 text-white/60 hover:text-white text-2xl'
                >
                  <FaTimes />
                </button>

                {/* DRISHTI AR EXPANDED */}
                {expandedCard === 'drishti' && (
                  <div>
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full flex items-center gap-1'>
                        <FaRocket className='text-xs' /> ACTIVE PROTOTYPE
                      </span>
                      <span className='px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex items-center gap-1'>
                        <FaCheckCircle className='text-xs' /> REGISTERED STARTUP
                      </span>
                    </div>

                    <h3 className='text-4xl font-primary font-bold text-white mb-3'>
                      🥽 Drishti AR
                    </h3>
                    <p className='text-accent font-semibold mb-6 text-xl'>
                      AI-First Smart Glasses
                    </p>

                    <p className='text-white/90 mb-6 text-lg'>
                      Transform how humans interact with digital information by embedding intelligence directly into their line of sight. Real-time spatial intelligence, multimodal interaction, and on-device LLM inference — all in a wearable form factor.
                    </p>

                    <h4 className='text-xl font-semibold text-accent mb-4'>Key Features</h4>
                    <div className='space-y-3 mb-6'>
                      <div className='flex items-start gap-3'>
                        <span className='text-accent mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Real-time Spatial Intelligence</p>
                          <p className='text-white/70 text-sm'>SLAM mapping and environment understanding</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-accent mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Multimodal Interaction</p>
                          <p className='text-white/70 text-sm'>Voice, gesture, and gaze-based control systems</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-accent mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>On-Device LLM Inference</p>
                          <p className='text-white/70 text-sm'>Privacy-first, low-latency contextual AI responses</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-accent mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Edge-First Design</p>
                          <p className='text-white/70 text-sm'>All processing on-device; no cloud dependency</p>
                        </div>
                      </div>
                    </div>

                    <div className='bg-black/30 rounded-lg p-6 mb-6'>
                      <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                        <FaClock /> Development Timeline
                      </h4>
                      <div className='space-y-2 text-sm'>
                        <p className='text-white/70'>
                          <strong className='text-accent'>Current Phase:</strong> Prototype Hardware & AI Integration
                        </p>
                        <p className='text-white/70'>
                          <strong className='text-accent'>Target:</strong> First Working Prototype — November 2025
                        </p>
                        <p className='text-white/70'>
                          <strong className='text-accent'>Fundraising:</strong> Seed Round — December 2025
                        </p>
                        <p className='text-white/70'>
                          <strong className='text-accent'>Next:</strong> Pilot Deployments — Q1-Q2 2026
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                      <a 
                        href='https://drive.google.com/file/d/1b_LeqB5nv5TSJHcv_w20OsKdJTeo7wH-/view?usp=sharing' 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='btn btn-lg flex-1 text-center flex items-center justify-center'
                      >
                        View Registration
                      </a>
                      <a 
                        href='https://wa.me/917892787731?text=Hi%20Siddharoodh%2C%20I%27m%20interested%20in%20Drishti%20AR' 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='btn btn-lg flex-1 text-center bg-green-600 hover:bg-green-700 flex items-center justify-center'
                      >
                        Discuss Investment
                      </a>
                    </div>
                  </div>
                )}

                {/* SMART CITY EXPANDED */}
                {expandedCard === 'smartcity' && (
                  <div>
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full flex items-center gap-1'>
                        <FaClock className='text-xs' /> TRAINING PHASE
                      </span>
                      <span className='px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full'>
                        NVIDIA PARTNERSHIP
                      </span>
                    </div>

                    <h3 className='text-4xl font-primary font-bold text-white mb-3'>
                      🏙 Smart City Intelligence
                    </h3>
                    <p className='text-blue-400 font-semibold mb-6 text-xl'>
                      Urban AI Infrastructure Platform
                    </p>

                    <p className='text-white/90 mb-6 text-lg'>
                      Transform existing urban infrastructure into intelligent, responsive systems. Retrofit any camera or surveillance system into AI-enabled sensors using custom edge compute modules powered by NVIDIA Jetson platforms.
                    </p>

                    <h4 className='text-xl font-semibold text-blue-400 mb-4'>Core Innovation</h4>
                    <div className='space-y-3 mb-6'>
                      <div className='flex items-start gap-3'>
                        <span className='text-blue-400 mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Retrofit Intelligence</p>
                          <p className='text-white/70 text-sm'>Upgrade existing cameras without infrastructure overhaul</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-blue-400 mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Custom Edge Compute</p>
                          <p className='text-white/70 text-sm'>Apollo & Uranus series powered by NVIDIA Jetson</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-blue-400 mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>On-Premise LLM Deployment</p>
                          <p className='text-white/70 text-sm'>Train and deploy models directly on edge infrastructure</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <span className='text-blue-400 mt-1 text-lg'>✓</span>
                        <div>
                          <p className='text-white font-semibold'>Privacy-First Design</p>
                          <p className='text-white/70 text-sm'>All processing on-edge; no raw footage transmitted</p>
                        </div>
                      </div>
                    </div>

                    <div className='bg-black/30 rounded-lg p-6 mb-6 border border-green-500/30'>
                      <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                        <FaCheckCircle className='text-green-400' /> NVIDIA Training Program
                      </h4>
                      <p className='text-white/80 text-sm mb-3'>
                        Currently undergoing specialized training with NVIDIA experts from USA on Jetson platforms and edge AI deployment for smart city applications.
                      </p>
                      <p className='text-white/70 text-xs'>
                        This partnership provides access to cutting-edge hardware, optimization techniques, and deployment strategies for city-scale AI infrastructure.
                      </p>
                    </div>

                    <div className='bg-black/30 rounded-lg p-6 mb-6'>
                      <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                        <FaClock /> Development Timeline
                      </h4>
                      <div className='space-y-2 text-sm'>
                        <p className='text-white/70'>
                          <strong className='text-blue-400'>Current Phase:</strong> System Architecture & Hardware Prototyping
                        </p>
                        <p className='text-white/70'>
                          <strong className='text-blue-400'>Target:</strong> Pilot Deployments — Q1-Q2 2026
                        </p>
                        <p className='text-white/70'>
                          <strong className='text-blue-400'>Vision:</strong> City-scale deployment throughout 2026
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                      <a 
                        href='https://wa.me/917892787731?text=Hi%20Siddharoodh%2C%20I%27m%20interested%20in%20Smart%20City%20Intelligence%20Platform' 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='btn btn-lg flex-1 text-center bg-blue-600 hover:bg-blue-700 flex items-center justify-center'
                      >
                        Partnership
                      </a>
                      <a 
                        href='https://wa.me/917892787731?text=Hi%20Siddharoodh%2C%20I%27d%20like%20to%20pilot%20Smart%20City%20technology' 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='btn btn-lg flex-1 text-center bg-green-600 hover:bg-green-700 flex items-center justify-center'
                      >
                        Pilot Program
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
