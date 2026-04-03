
import React,{ useState} from 'react'
import { MapPin, Mail, Phone , Github, Linkedin, Twitter, Send, MessageSquare} from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PERSONAL_INFO,SOCIAL_LINKS } from '../../utils/constants';

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
        if{!formDate.name || !formData.email || !formData.message} {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }
        setStatus({ type: 'loading', message: 'Sending your message...' });
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to send message.');
            }
            setStatus({ type: 'success', message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
               
            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);

            const socialIcons = {
                github: <Github className="w-5 h-5" />,
                linkedin: <Linkedin className="w-5 h-5" />,
                twitter: <Twitter className="w-5 h-5" />
            };


  return (
    <section id="contact" className="">
        <div className="">
             <div className=""/>
             <div className=""/>
             <div className=""/>
             </div>
             <div className="">
                <FadeIn delay={0}>
                     <div className="">
                         <div className="">
                            <MessageSquare className="w-6 h-6 text-primary mb-4" />
                            <span className='text-lg font-semibold'>Get In Touch</span>
                               Get In Touch
                            </span>
                         </div>
                         <h2 className="text-4xl text-white mb-6">Let's Talk About Your Project</h2>
                     </div>

                </FadeIn>
   
  )
}

export default Contact
