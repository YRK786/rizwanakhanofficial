import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      label: 'Email',
      value: 'contact@rizwanakhan.com',
      href: 'mailto:contact@rizwanakhan.com',
    },
    {
      icon: HiOutlinePhone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: HiOutlineLocationMarker,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Get in"
          highlight="Touch"
          description="Have a question or want to collaborate? Reach out and let's work together for a better community."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollAnimate animation="fade-right" className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-800 transition-colors hover:text-emerald-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white">
              <p className="mb-2 text-lg font-bold">Let&apos;s Collaborate</p>
              <p className="text-sm text-emerald-100">
                Join hands with us to create lasting impact in communities
                across the nation.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-left" delay={150} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition-colors outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition-colors outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition-colors outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition-colors outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg sm:w-auto"
            >
              <FaPaperPlane className="h-4 w-4" />
              Submit Message
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
              >
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}
          </form>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Contact;
