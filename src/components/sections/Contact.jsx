import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      // إرسال للـ backend (اختياري)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // EmailJS
      await emailjs.send(
        'service_1m1970e',
        'template_whawerf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'M7hHpBMRFZXIE2W8u'
      );

       setStatus({ type: 'success', message: 'Message sent successfully!' });
  setFormData({ name: '', email: '', message: '' });

} catch (error) {
  console.error(error);
  
  setStatus({ type: 'warning', message: 'Message sent but we had a small error.' });
}
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">

        <FadeIn>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <MessageSquare />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl text-white mb-3">
              Let's Talk About Your Project
            </h2>

            <p className="text-white/60">
              Feel free to send me a message anytime 🚀
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>

            {status.message && (
              <div className={`p-3 rounded ${
                status.type === 'success'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

          </form>
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;