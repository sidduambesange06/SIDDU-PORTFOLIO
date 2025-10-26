import React, { useState } from 'react';
// Link from react-scroll
import { Link } from 'react-scroll';

const Header = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const emailData = {
    email: 'sidduambesange005@gmail.com',
    subject: 'Work Collaboration Opportunity',
    body: `Hi Siddharoodh,

I viewed your portfolio and would like to discuss a work collaboration opportunity with you.

Looking forward to hearing from you.

Best regards`
  };

  // Advanced email handler with modal and multiple options
  const openWorkEmail = () => {
    setShowEmailModal(true);
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  const copyFullMessage = async () => {
    const fullMessage = `To: ${emailData.email}
Subject: ${emailData.subject}

${emailData.body}`;
    
    const success = await copyToClipboard(fullMessage, 'full');
    if (success) {
      alert('Full email message copied to clipboard!');
      setShowEmailModal(false);
    } else {
      alert('Unable to copy. Please manually copy the email details.');
    }
  };

  const openEmailService = (service) => {
    const { email, subject, body } = emailData;
    let url = '';

    switch (service) {
      case 'gmail':
        url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&tf=1`;
        break;
      case 'outlook':
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'yahoo':
        url = `https://compose.mail.yahoo.com/?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'mailto':
        url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
        setShowEmailModal(false);
        return;
      default:
        return;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowEmailModal(false);
  };

  return (
    <>
      <header className='py-6 sm:py-8'>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link to='home' smooth={true} spy={true} className='cursor-pointer'>
              <div>
                <h1 className='text-lg sm:text-2xl font-primary font-bold text-gradient'>SIDDHAROODH</h1>
                <p className='text-xs sm:text-sm text-white/70 font-secondary'>Deep Tech Entrepreneur</p>
              </div>
            </Link>
            {/* button */}
            <button onClick={openWorkEmail} className='btn btn-sm text-xs sm:text-sm px-4 sm:px-6'>
              Work with me
            </button>
          </div>
        </div>
      </header>

      {/* Advanced Email Modal */}
      {showEmailModal && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-primary border border-accent/30 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto'>
            {/* Close button */}
            <button 
              onClick={() => setShowEmailModal(false)}
              className='absolute top-4 right-4 text-white/60 hover:text-white text-2xl'
            >
              ×
            </button>
            
            <h3 className='text-xl sm:text-2xl font-primary text-gradient mb-6'>Contact Me</h3>
            
            {/* Email address */}
            <div className='mb-6'>
              <p className='text-white/80 mb-2 text-sm sm:text-base'>Email:</p>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-accent font-semibold text-sm sm:text-base break-all'>{emailData.email}</span>
                <button 
                  onClick={() => copyToClipboard(emailData.email, 'email')}
                  className='text-xs bg-accent/20 hover:bg-accent/30 px-2 py-1 rounded transition-all'
                >
                  {emailCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Subject */}
            <div className='mb-6'>
              <p className='text-white/80 mb-2'>Subject:</p>
              <p className='text-white font-medium'>{emailData.subject}</p>
            </div>

            {/* Message preview */}
            <div className='mb-6'>
              <p className='text-white/80 mb-2'>Message:</p>
              <div className='bg-black/30 p-3 rounded-lg text-sm text-white/90 max-h-32 overflow-y-auto'>
                {emailData.body}
              </div>
            </div>

            {/* Email service buttons */}
            <div className='space-y-3'>
              <p className='text-white/80 text-sm mb-3'>Choose your email service:</p>
              
              <div className='grid grid-cols-2 gap-2'>
                <button 
                  onClick={() => openEmailService('gmail')}
                  className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium'
                >
                  Gmail
                </button>
                <button 
                  onClick={() => openEmailService('outlook')}
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium'
                >
                  Outlook
                </button>
                <button 
                  onClick={() => openEmailService('yahoo')}
                  className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium'
                >
                  Yahoo
                </button>
                <button 
                  onClick={() => openEmailService('mailto')}
                  className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium'
                >
                  Default App
                </button>
              </div>

              <button 
                onClick={copyFullMessage}
                className='w-full bg-accent hover:bg-accent/80 text-white px-4 py-3 rounded-lg transition-all font-medium mt-4'
              >
                Copy Full Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;