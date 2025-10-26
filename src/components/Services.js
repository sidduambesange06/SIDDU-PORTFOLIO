import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// Link from react-scroll
import { Link } from 'react-scroll';

// Enterprise solutions data
const solutions = [
  {
    name: 'AI/ML Systems Architecture',
    description:
      'Custom LLM solutions with RAG architectures, fine-tuned domain-specific models, and edge AI deployment. From intelligent workflow automation to real-time computer vision systems — production-grade AI that delivers measurable business impact.',
    link: 'Explore Solutions',
  },
  {
    name: 'Enterprise Web Platforms',
    description:
      'Full-stack development with AI integration, responsive dashboards, and real-time features. Built with Next.js, FastAPI, and modern cloud infrastructure. WhatsApp automation, customer support bots, and dynamic content generation included.',
    link: 'View Projects',
  },
  {
    name: 'Edge Computing Solutions',
    description:
      'NVIDIA Jetson-based edge AI deployment, model optimization with TensorRT, and distributed inference pipelines. Retrofit intelligence for existing infrastructure — bringing smart capabilities without complete system overhaul.',
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 px-4 lg:px-0'>
          {/* Text Content - sliding from left */}
          <motion.div
            className='flex-1 flex justify-center items-center'
            initial='hidden'
            whileInView='show'
            variants={fadeIn('left', 0.3)}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h2 className='h2 text-accent mb-6'>Enterprise Solutions</h2>
              <h3 className='h3 max-w-[455px] mb-16'>
                Architecting production-grade AI systems for enterprises and startups — bridging cutting-edge research with business-critical applications.
              </h3>
              <p className='mb-8 text-white/80 max-w-[455px]'>
                This consulting work serves dual purpose: <span className='text-accent font-semibold'>generating sustainable revenue</span> to self-fund R&D for core ventures while <span className='text-accent font-semibold'>validating technical capabilities</span> in real-world production environments.
              </p>
              <Link to='contact' smooth={true} spy={true}>
                <button className='btn btn-sm'>Discuss Your Project</button>
              </Link>
            </div>
          </motion.div>

          {/* Solutions List - sliding from right */}
          <motion.div
            className='flex-1'
            initial='hidden'
            whileInView='show'
            variants={fadeIn('right', 0.3)}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {solutions.map((solution, index) => {
                const { name, description, link } = solution;
                return (
                  <div
                    className='border-b border-white/20 min-h-[146px] mb-[38px] flex flex-col sm:flex-row py-4 gap-4'
                    key={index}
                  >
                    <div className='flex-1'>
                      <h4 className='text-[20px] tracking-wider font-semibold mb-4'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight text-sm'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-row sm:flex-col gap-4 sm:gap-0 items-center sm:items-end justify-center sm:justify-start'>
                      <Link to='contact' smooth={true} spy={true}>
                        <button
                          className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                          aria-label='Learn more'
                        >
                          <BsArrowUpRight />
                        </button>
                      </Link>
                      <Link to='contact' smooth={true} spy={true}>
                        <button className='text-gradient text-sm bg-transparent border-0 cursor-pointer'>
                          {link}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
