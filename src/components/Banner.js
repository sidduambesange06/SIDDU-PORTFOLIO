// images
import Image from '../assets/avatar.png';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// Link from react-scroll
import { Link } from 'react-scroll';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';
// variants (if needed)
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[35px] sm:text-[55px] font-bold leading-[0.9] lg:text-[110px]'>
              SIDDHAROODH <span>AMBESANGE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[20px] sm:text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Deep Tech Entrepreneur',
                  2000,
                  'AI Architect',
                  2000,
                  'Edge Computing Pioneer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base px-4 lg:px-0'>
              "              Building the future of intelligent interfaces — from AI-powered AR glasses (Drishti AR) to smart city infrastructure. Leading a 20-member team across dual ventures while delivering production AI/ML solutions and web platforms for enterprise clients. Bringing powerful intelligence to the edge through innovation and consulting."
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-col sm:flex-row max-w-max gap-4 sm:gap-x-6 items-center mb-12 mx-auto
            lg:mx-0'>
              <a href='https://wa.me/917892787731?text=Hi%20Siddu%2C%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect' target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-lg'>Contact me</button>
              </a>
              <Link to='work' smooth={true} spy={true} className='text-gradient btn-link'>
                Explore Innovation Labs
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='https://www.linkedin.com/in/siddharoodh-ambesange-18a1191ba' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/sidduambesange06' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/siddu_ambesange' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* images */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className='hidden lg:flex flex-1 justify-end max-w-[600px]'>
            <img src={Image} alt="Avatar" className="w-[480px] h-[480px] rounded-full shadow-2xl" style={{ boxShadow: '0 0 60px rgba(184, 9, 195, 0.5)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
