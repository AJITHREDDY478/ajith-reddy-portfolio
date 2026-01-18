import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import portfolioData from '../mock';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact Message",
          message: formData.message,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. I’ll get back to you soon.",
        });
  
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'teal'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ajith Reddy',
      href: personal.linkedin,
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@ajithreddy',
      href: personal.github,
      color: 'gray'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group">
                      <div className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                          <info.icon className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-slate-800/50 border-slate-700 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-300 mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">○</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
