import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    'University Selection',
    'Application Support',
    'Scholarship Assistance',
    'Visa Guidance',
    'Test Preparation',
    'Settlement Support',
    'General Inquiry',
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (561) 668-9325',
      link: 'tel:+15616689325',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@scholaway.com',
      link: 'mailto:info@scholaway.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '1717 N. Bayshore Drive, Suite 4134, Miami, FL 33132, USA',
      link: '#map',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const faqs = [
    {
      question: 'How long does the application process take?',
      answer: 'The complete application process typically takes 12-18 months, including test preparation, university selection, and visa processing.',
    },
    {
      question: 'What are your consultation fees?',
      answer: 'We offer a free initial consultation. Our service packages vary based on your needs. Contact us for detailed pricing information.',
    },
    {
      question: 'Do you guarantee university admission?',
      answer: 'While we cannot guarantee admission, our expert guidance significantly increases your chances of acceptance at top universities.',
    },
    {
      question: 'Can you help with scholarship applications?',
      answer: 'Yes! We have extensive experience helping students secure scholarships and financial aid from universities worldwide.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm scale-110"
          style={{
            backgroundImage: 'url(/Photos/Contact.jpg)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-true-v-50/90 via-white/80 to-true-v-100/60" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6">
              Get in <span className="text-true-v-600">Touch</span>
            </h1>
            <p className="text-xl text-text-medium mb-6">
              Start your educational journey today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-text-dark mb-2">Send Us a Message</h2>
                <p className="text-text-medium mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    {React.createElement(FaCheckCircle as any, { className: "text-6xl text-green-500 mx-auto mb-4" })}
                    <h3 className="text-2xl font-semibold text-text-dark mb-2">Thank You!</h3>
                    <p className="text-text-medium">Your message has been sent successfully. We'll contact you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-true-v-600 transition-colors"
                    />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-true-v-600 transition-colors"
                      />
                      
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-true-v-600 transition-colors"
                      />
                    </div>
                    
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-true-v-600 transition-colors"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-true-v-600 transition-colors resize-none"
                    />
                    
                    <button
                      type="submit"
                      className="btn-primary btn-hover-shine w-full bg-true-v-600 text-white py-4 rounded-full font-medium text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-true-v-100 rounded-xl flex items-center justify-center mr-4">
                      {React.createElement(info.icon as any, { className: "text-xl text-true-v-600" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark">{info.title}</h4>
                      <p className="text-text-medium">{info.content}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-true-v-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-text-dark mb-4 flex items-center">
                  {React.createElement(FaClock as any, { className: "mr-2 text-true-v-600" })}
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-text-medium">{schedule.day}</span>
                      <span className="text-text-dark font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative" id="map">
        <iframe
          title="Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.2817919165994!2d-80.18668998500412!3d25.78855098364139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48c1f02b58b%3A0x9065b3c5a1e9e8d7!2s1717%20N%20Bayshore%20Dr%2C%20Miami%2C%20FL%2033132%2C%20USA!5e0!3m2!1sen!2sus!4v1642861234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
      </section>

      {/* Welcome & Partnership Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0.4, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                  Let's Build the <span className="text-true-v-600">Future</span> Together
                </h2>
                <div className="space-y-4 text-text-medium leading-relaxed">
                  <p>
                    We welcome inquiries from individuals, schools, community organizations, potential partners, and anyone interested in our services or mission. Please feel free to reach out to us through the following channels.
                  </p>
                  <p>
                    You can also follow our journey and get the latest updates by connecting with us on social media. (Links to our official social media pages will be provided here once available.)
                  </p>
                  <p>
                    Whether you're looking for guidance, looking to collaborate, or just looking to learn more, Schola Education LLC is here to help. We strive to respond to all messages as quickly as possible and look forward to hearing from you. Together, let's empower the next generation of students and professionals to achieve their dreams!
                  </p>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0.4, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Diverse team collaborating and working together around a table with laptops"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-true-v-100 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-true-v-200 rounded-full opacity-60"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              What Our <span className="text-true-v-600">Students Say</span>
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Hear from the students whose lives have been transformed through our guidance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Şölen Maiiloğlu",
                title: "Regional Sales & Marketing Manager, Turkish Airlines",
                quote: "Without the university exam preparation camp led by Ms. Şirin, I wouldn't be the person I am today. It was not only about academic success — it taught me discipline, focus, and helped me realize my true potential. Her program changed the trajectory of my life."
              },
              {
                name: "Dr. Alp Yazıcı",
                title: "Physician",
                quote: "When I met her, I dreamed of becoming a doctor — but I was lost. Through her personalized guidance, I regained my motivation and significantly improved my national exam score. Today, I'm a physician. That journey began with her unwavering belief in me."
              },
              {
                name: "Onur Bozdemir",
                title: "Psychologist",
                quote: "After a life-changing accident, I had given up on university. Then I met Servet Gülsün Şirin. She guided me toward psychology, helped me access scholarships, and encouraged me to take active roles on campus. Her mentorship gave me purpose, confidence, and a future."
              },
              {
                name: "Melisa Şahin",
                title: "Digital Media Professional (Candidate)",
                quote: "Ms. Şirin's encouragement turned my interest in clinical work into a passion for digital health innovation. Today, I lead a student-founded health-tech project, and her vision inspired me to merge technology with healthcare."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 relative"
              >
                <div className="absolute top-6 left-8 text-6xl text-true-v-200 font-serif">"</div>
                <div className="relative z-10 pt-8">
                  <p className="text-text-medium leading-relaxed mb-6 text-lg">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-text-dark text-lg">{testimonial.name}</h4>
                    <p className="text-true-v-600 font-medium">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Frequently Asked <span className="text-true-v-600">Questions</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-text-dark mb-3">{faq.question}</h3>
                <p className="text-text-medium leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Link to FAQ page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-text-medium mb-4">
              Have more questions? Visit our comprehensive FAQ section for detailed answers.
            </p>
            <a
              href="/faq"
              className="inline-flex items-center px-8 py-3 bg-true-v-600 text-white font-medium rounded-full hover:bg-true-v-700 transition-colors duration-300"
            >
              View All FAQs
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;