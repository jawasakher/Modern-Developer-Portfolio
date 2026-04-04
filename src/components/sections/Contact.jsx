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
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

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
    <section id="contact" className="relative py-24 bg-[#050505]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(111,224,71,0.18),_transparent_40%)]" />
      <div className="max-w-3xl mx-auto px-4">

        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 text-[#6FE047] mb-4">
              <MessageSquare className="text-[#6FE047] shadow-[0_0_25px_rgba(111,224,71,0.35)]" />
              <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#6FE047]/90">
                Contact
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-1 w-16 rounded-full bg-[#6FE047]/80" />
              <span className="text-sm uppercase tracking-[0.35em] text-white/50">Let's connect</span>
              <span className="h-1 w-16 rounded-full bg-[#6FE047]/80" />
            </div>

            <h2 className="text-4xl sm:text-5xl text-white font-semibold leading-tight mb-4">
              Let's Talk About <span className="text-[#6FE047]">Your Project</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Ready to turn your ideas into a polished digital experience? Send a message and let&apos;s build something exceptional together.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#6FE047]/20 bg-[#090909]/95 shadow-[0_40px_120px_rgba(111,224,71,0.1)]">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#6FE047]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#6FE047]/15 to-transparent" />

            <form onSubmit={handleSubmit} className="relative space-y-5 p-8 sm:p-10">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-[#6FE047]/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 transition focus:border-[#6FE047] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#6FE047]/20"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-[#6FE047]/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 transition focus:border-[#6FE047] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#6FE047]/20"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-3xl border border-[#6FE047]/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 transition focus:border-[#6FE047] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#6FE047]/20"
              />

              <button
                type="submit"
                className="w-full rounded-3xl bg-gradient-to-r from-[#6FE047] via-[#8ef57a] to-[#c8ffbb] px-6 py-4 text-sm font-semibold text-[#050505] shadow-[0_18px_45px_rgba(111,224,71,0.22)] transition duration-300 hover:shadow-[0_25px_80px_rgba(111,224,71,0.28)] flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>

              {status.message && (
                <div className={`rounded-3xl p-4 text-sm ${
                  status.type === 'success'
                    ? 'bg-[#6FE047]/15 text-[#6FE047]'
                    : status.type === 'warning'
                      ? 'bg-emerald-500/15 text-emerald-200'
                      : 'bg-rose-500/15 text-rose-200'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
