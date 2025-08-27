import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactMessage } from "@/entities/ContactMessage";
import { SendEmail } from "@/integrations/Core";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/talapaneni-varun-chowdary-561821258/",
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-700 hover:to-blue-800"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/varunchowdarytalapaneni",
    color: "from-gray-800 to-gray-900",
    hoverColor: "hover:from-gray-900 hover:to-black"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:varuntalapaneni18@gmail.com",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactMessage.create(formData);
      await SendEmail({
        to: "varuntalapaneni18@gmail.com",
        subject: `New Portfolio Contact from ${formData.name}`,
        body: `\nNew contact form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {"Let's "}<span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 shadow-xl border-0 bg-white dark:bg-slate-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">Kolkata, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300">varuntalapaneni18@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-xl border-0 bg-white dark:bg-slate-900/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-300">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project or opportunity..."
                      className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
