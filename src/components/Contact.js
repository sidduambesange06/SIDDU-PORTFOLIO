import React, { useRef, useEffect, useState } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// emailjs
import emailjs from 'emailjs-com';
// icons
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validationErrors, setValidationErrors] = useState({});
  const [submitProgress, setSubmitProgress] = useState(0);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('EqOHyIWRcLYJDZ7_x');
    console.log('EmailJS initialized');
  }, []);

  // Form validation
  const validateForm = (data) => {
    const errors = {};
    
    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(data.name.trim())) {
      errors.name = 'Name can only contain letters and spaces';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (data.message.trim().length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }

    return errors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name === 'from_name' ? 'name' : name === 'from_email' ? 'email' : name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear validation error for this field
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: '' }));
    }
  };

  // Progress simulation
  const simulateProgress = () => {
    setSubmitProgress(0);
    const interval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    return interval;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Get current form data
    const currentFormData = {
      name: e.target.from_name.value,
      email: e.target.from_email.value,
      message: e.target.message.value
    };

    // Validate form
    const errors = validateForm(currentFormData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear previous errors and start submission
    setValidationErrors({});
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Start progress simulation
    const progressInterval = simulateProgress();

    console.log('Attempting to send email...');
    console.log('Form data:', currentFormData);

    try {
      const result = await emailjs.sendForm('service_db9nte8', 'template_pz1bjye', form.current, 'EqOHyIWRcLYJDZ7_x');
      
      // Complete progress
      clearInterval(progressInterval);
      setSubmitProgress(100);
      
      console.log('SUCCESS:', result);
      setSubmitStatus('success');
      
      // Reset form after delay
      setTimeout(() => {
        form.current.reset();
        setFormData({ name: '', email: '', message: '' });
        setSubmitProgress(0);
        setSubmitStatus('');
      }, 3000);

    } catch (error) {
      clearInterval(progressInterval);
      setSubmitProgress(0);
      setSubmitStatus('error');
      
      console.error('FULL ERROR:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial='hidden'
          exit='exit' 
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-8'>
              Let's Work <br />together!!
            </h2>
            
            {/* Email Address */}

            
            {/* Social Links */}
            <div className='flex text-[24px] gap-x-6 mb-8'>
              <a href='https://www.linkedin.com/in/siddharoodh-ambesange-18a1191ba' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/sidduambesange06' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/siddu_ambesange' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-all duration-300'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ENHANCED FORM */}
        <motion.form 
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn('left', 0.2)} 
          initial='hidden'
          exit='exit' 
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-lg flex flex-col gap-y-6 pb-24 p-6 items-start relative overflow-hidden'>
          
          {/* Progress Bar */}
          {isSubmitting && (
            <div className='absolute top-0 left-0 w-full h-1 bg-black/20'>
              <div 
                className='h-full bg-gradient-to-r from-accent to-blue-500 transition-all duration-300'
                style={{ width: `${submitProgress}%` }}
              ></div>
            </div>
          )}

          {/* Name Input */}
          <div className='w-full'>
            <input 
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-lg ${
                validationErrors.name ? 'border-red-400' : ''
              }`}
              type='text' 
              placeholder='Your name' 
              name='from_name'
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            {validationErrors.name && (
              <p className='text-red-400 text-xs mt-1 flex items-center gap-1'>
                <FaExclamationTriangle /> {validationErrors.name}
              </p>
            )}
          </div>
          
          {/* Email Input */}
          <div className='w-full'>
            <input 
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-lg ${
                validationErrors.email ? 'border-red-400' : ''
              }`}
              type='email' 
              placeholder='Your email' 
              name='from_email'
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            {validationErrors.email && (
              <p className='text-red-400 text-xs mt-1 flex items-center gap-1'>
                <FaExclamationTriangle /> {validationErrors.email}
              </p>
            )}
          </div>
          
          {/* Message Input */}
          <div className='w-full'>
            <textarea 
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-4 rounded-lg ${
                validationErrors.message ? 'border-red-400' : ''
              }`}
              placeholder='Your message' 
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required 
            ></textarea>
            {validationErrors.message && (
              <p className='text-red-400 text-xs mt-1 flex items-center gap-1'>
                <FaExclamationTriangle /> {validationErrors.message}
              </p>
            )}
            <div className='text-xs text-white/40 text-right mb-8'>
              {formData.message.length}/1000 characters
            </div>
          </div>

          {/* Hidden fields for additional data */}
          <input type="hidden" name="timestamp" value={new Date().toLocaleString()} />
          <input type="hidden" name="browser_info" value={navigator.userAgent} />
          <input type="hidden" name="page_url" value={window.location.href} />
          <input type="hidden" name="user_language" value={navigator.language} />
          <input type="hidden" name="screen_resolution" value={`${window.screen.width}x${window.screen.height}`} />
          
          {/* Submit Button */}
          <button 
            className={`btn btn-lg rounded-lg flex items-center gap-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className='animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full'></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send message
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-2 text-green-400 text-sm'
            >
              <FaCheckCircle />
              Message sent successfully! Thank you for contacting me.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-2 text-red-400 text-sm'
            >
              <FaExclamationTriangle />
              Failed to send message. Please try again.
            </motion.div>
          )}

          {submitStatus === 'sending' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-2 text-blue-400 text-sm'
            >
              <div className='animate-pulse w-2 h-2 bg-blue-400 rounded-full'></div>
              Processing your message...
            </motion.div>
          )}
        </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;