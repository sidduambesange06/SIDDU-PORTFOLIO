import React from 'react';
// CountUp
import CountUp from 'react-countup';
// Intersection Observer
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[800px] w-[60%] mix-blend-lighten bg-top'
            initial='hidden'
            animate={inView ? 'show' : ''}
            variants={fadeIn('right', 0.3)}
            viewport={{ once: false, amount: 0.3 }}
          ></motion.div>
          
          {/* Text */}
          <motion.div 
            className='flex-1 text-right'
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
