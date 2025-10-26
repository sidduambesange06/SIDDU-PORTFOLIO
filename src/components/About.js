import React from 'react';
// CountUp
import CountUp from 'react-countup';
// Intersection Observer
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Profile Image
import ProfileImg from '../assets/profile.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen py-8'>
          {/* Professional Profile Image */}
          <motion.div 
            className='flex-1 flex justify-center items-center'
            initial='hidden'
            animate={inView ? 'show' : ''}
            variants={fadeIn('right', 0.3)}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className='relative group'>
              {/* Outer glow ring */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-600 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse'></div>
              
              {/* Rotating border */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-600 animate-spin-slow p-1'>
                <div className='w-full h-full rounded-full bg-primary'></div>
              </div>
              
              {/* Profile Image Container */}
              <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl group-hover:scale-105 transition-transform duration-500'>
                <img 
                  src={ProfileImg} 
                  alt="Siddharoodh Ambesange - Deep Tech Entrepreneur" 
                  className='w-full h-full object-cover object-center'
                />
                
                {/* Overlay gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>
              
              {/* Floating badge */}
              <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-blue-500 px-6 py-2 rounded-full shadow-lg'>
                <p className='text-white font-bold text-sm sm:text-base whitespace-nowrap'>Deep Tech Entrepreneur</p>
              </div>
            </div>
          </motion.div>
          
          {/* Text */}
          <motion.div 
            className='flex-1 text-center lg:text-right px-4 lg:px-0'
            initial='hidden'
            animate={inView ? 'show' : ''}
            variants={fadeIn('left', 0.5)}
          >
            <div className='flex-1'>
              <h2 className='h2 text-accent'>About Me</h2>
              <h3 className='h3 mb-4'>
                Founder & Chief Architect — Building AI at the Edge
              </h3>
              <p className='mb-6'>
                I'm <span className='text-accent font-semibold'>Siddharoodh Ambesange</span>, a product architect and deep tech entrepreneur working at the convergence of AI, computer vision, and edge computing.
              </p>
              <p className='mb-6'>
                Leading a <CountUp start={inView ? 0 : null} end={20} duration={2} />+ member team across <span className='text-accent font-semibold'>two parallel innovation tracks</span>: <strong>Drishti AR</strong> (AI-native smart glasses) and <strong>Smart City Intelligence Platform</strong> (transforming urban infrastructure into responsive AI networks).
              </p>
              <p className='mb-6'>
                My work focuses on a singular thesis: <span className='text-gradient font-semibold'>bringing powerful AI to the edge</span> — whether that edge is a pair of glasses or a city-wide network of intelligent sensors.
              </p>
              <p className='mb-6'>
                Beyond core ventures, I architect production-grade AI/ML systems and web platforms for enterprises — generating sustainable revenue to self-fund R&D while validating technical capabilities in real-world environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
