import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Instagram, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const EmailJSContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_qngws6o";      // Replace with EmailJS Service ID
    const templateID = "template_aufh2nq";    // Replace with EmailJS Template ID
    const publicKey = "74eIEsWigcXt6aK4M";      // Replace with EmailJS Public Key

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSubmitStatus('success');
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/asrafaleem", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asrafaleem/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_.asraf.__/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-12 px-4 bg-navy-medium/20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-accent-teal to-accent-sky bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card className="bg-navy-medium/30 border-navy-medium/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">Let's Connect</h3>
                <p className="text-text-secondary mb-6">
                  I'm always open to discussing new opportunities and interesting projects.
                  Feel free to reach out through the form or any of my social channels!
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="mailto:asrafaleem8@gmail.com"
                  className="flex items-center gap-3 text-accent-teal hover:text-accent-sky transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>asrafaleem8@gmail.com</span>
                </motion.a>
                <div className="flex gap-3 pt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-navy-medium/50 border border-navy-medium rounded-full hover:bg-accent-teal/20 hover:border-accent-teal transition-colors"
                    >
                      <social.icon className="h-5 w-5 text-accent-teal" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <Card className="bg-navy-medium/30 border-navy-medium/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-navy-medium/50 border-navy-medium text-text-primary placeholder:text-text-secondary"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-navy-medium/50 border-navy-medium text-text-primary placeholder:text-text-secondary"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-navy-medium/50 border-navy-medium text-text-primary placeholder:text-text-secondary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-navy-medium/50 border-navy-medium text-text-primary placeholder:text-text-secondary min-h-32"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent-teal to-accent-sky hover:from-accent-teal/80 hover:to-accent-sky/80 text-navy-dark font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      Message sent successfully!
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      Failed to send message. Please try again.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailJSContactForm;
