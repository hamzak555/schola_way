import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaArrowRight, FaBook, FaUser, FaCheckCircle, FaStar } from 'react-icons/fa';
import { pageAnimations, staggerContainer, staggerItem } from '../../utils/animations';

const Home: React.FC = () => {
  const services = [
    {
      icon: FaGraduationCap,
      title: "Career Identity Development",
      description: "Discover your strengths and passions through personalized assessments and expert guidance.",
    },
    {
      icon: FaBook,
      title: "College Selection",
      description: "Find the perfect academic fit with our comprehensive university matching process.",
    },
    {
      icon: FaUser,
      title: "Family Support",
      description: "Navigate educational decisions together with dedicated family consultation sessions.",
    }
  ];

  const features = [
    "Evidence-based methodology",
    "Personalized approach",
    "20+ years of experience",
    "Holistic guidance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-true-v-50 via-white to-true-v-100/30"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Gradient Orbs */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-400/30 to-purple-300/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-purple-300/25 to-purple-200/15 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl animate-float-reverse" />
          
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
            <div className="absolute top-40 right-40 w-3 h-3 bg-purple-300/30 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400/35 rounded-full animate-pulse delay-2000" />
            <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-200/25 rounded-full animate-pulse delay-3000" />
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-300/30 rounded-full animate-pulse delay-4000" />
          </div>
          
          {/* Subtle Grid Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(196, 181, 253)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content - 55% */}
            <motion.div 
              className="w-full lg:w-[55%]"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 
                variants={pageAnimations.fadeInDown}
                className="text-5xl md:text-7xl font-bold text-text-dark mb-6 leading-tight"
              >
                Education Guidance
                <span className="block text-true-v-600">For Everyone</span>
              </motion.h1>
              <motion.p 
                variants={pageAnimations.fadeIn}
                className="text-xl md:text-2xl text-text-medium mb-8 max-w-2xl leading-relaxed"
              >
                Empowering students and families to make confident educational decisions through personalized guidance and strategic planning.
              </motion.p>
              <motion.div
                variants={pageAnimations.fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact" 
                  className="btn-primary btn-hover-shine inline-flex items-center justify-center bg-true-v-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
                >
                  <span>Start Your Journey</span>
                  {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
                </Link>
                <Link 
                  to="/about" 
                  className="btn-outline btn-hover-shine inline-flex items-center justify-center border-2 border-true-v-600 text-true-v-600 px-8 py-4 rounded-full font-medium text-lg"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Images Container - 45% */}
            <div className="w-full lg:w-[45%] relative h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
              {/* Back Image */}
              <motion.div
                variants={pageAnimations.fadeInRight}
                initial="initial"
                animate="animate"
                className="absolute top-0 right-0 w-[200px] md:w-[280px] lg:w-[320px] h-[240px] md:h-[320px] lg:h-[400px] rounded-3xl shadow-2xl overflow-hidden"
              >
                <img 
                  src="/Photos/Placeholder 1.jpg" 
                  alt="Educational guidance consultation - Students and advisors working together" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              
              {/* Front Image */}
              <motion.div
                variants={pageAnimations.fadeInLeft}
                initial="initial"
                animate="animate"
                className="absolute bottom-0 left-0 w-[200px] md:w-[280px] lg:w-[320px] h-[240px] md:h-[320px] lg:h-[400px] rounded-3xl shadow-2xl overflow-hidden"
              >
                <img 
                  src="/Photos/Placeholder 2.jpg" 
                  alt="Student success and achievement - Happy graduate celebrating" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="absolute bottom-[60px] right-[20px] md:bottom-[80px] md:right-[40px] bg-white p-4 rounded-xl shadow-lg z-10"
              >
                <div className="flex items-center space-x-3">
                  {React.createElement(FaStar as any, { className: "text-yellow-500 text-2xl" })}
                  <div>
                    <p className="font-semibold text-text-dark">Excellence in Education</p>
                    <p className="text-sm text-text-medium">20+ Years of Guidance</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center justify-start md:justify-center"
              >
                {React.createElement(FaCheckCircle as any, { className: "text-true-v-600 mr-3 text-lg flex-shrink-0" })}
                <span className="text-text-dark font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Schola Education Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={pageAnimations.fadeInDown}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                About Schola Education LLC
              </h2>
            </motion.div>
            
            <motion.div 
              variants={pageAnimations.fadeInUp}
              className="bg-gradient-to-br from-true-v-50 to-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-lg text-text-medium leading-relaxed space-y-6">
                <p>
                  Schola Education LLC is an education management and career development company focused on vocational guidance and career counseling services. Our mission is to expand access to high-quality career guidance and training for everyone, particularly underserved communities.
                </p>
                <p>
                  We provide personalized career counseling, vocational assessments, skills training, and mentorship to help individuals discover their strengths and chart a path toward fulfilling careers.
                </p>
                <p>
                  We believe that professional career guidance should be accessible to all income groups. Through scholarships, free community seminars, and affordable programs, we ensure that those who cannot afford private counseling can still benefit from our services.
                </p>
                <p>
                  By balancing revenue-generating services with these free and low-cost initiatives, we sustain our social impact model while helping as many people as possible. Schola Education LLC is committed to empowering youth and adults to make informed career choices and achieve economic mobility, one individual at a time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={pageAnimations.fadeInDown}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              How We Help You Succeed
            </motion.h2>
            <motion.p 
              variants={pageAnimations.fadeIn}
              className="text-xl text-text-medium max-w-2xl mx-auto"
            >
              Comprehensive support tailored to your unique educational journey
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={pageAnimations.fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-true-v-100 rounded-xl flex items-center justify-center mb-6">
                  {React.createElement(service.icon as any, { className: "text-2xl text-true-v-600" })}
                </div>
                <h3 className="text-2xl font-semibold text-text-dark mb-4">{service.title}</h3>
                <p className="text-text-medium mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-true-v-600 font-medium hover:text-true-v-700 transition-colors group"
                >
                  Learn more
                  {React.createElement(FaArrowRight as any, { className: "ml-2 text-sm group-hover:translate-x-1 transition-transform" })}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Students Guided" },
              { number: "95%", label: "Success Rate" },
              { number: "20+", label: "Years Experience" },
              { number: "150+", label: "Partner Schools" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={pageAnimations.fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-true-v-600 mb-2">{stat.number}</div>
                <div className="text-text-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Banner Section */}
      <section className="py-24 bg-gradient-to-r from-true-v-600 to-true-v-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0.4, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your <span className="text-accent-light">Future?</span>
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Discover our comprehensive range of career guidance services, from personalized assessments to job placement support. Your journey to success starts with the right guidance.
                </p>
                
                {/* Feature highlights */}
                <div className="space-y-3 mb-8">
                  {[
                    "5 Specialized Service Categories",
                    "Personalized Career Assessments",
                    "Workforce Readiness Programs",
                    "Educator Training & Certification"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0.4, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="flex items-center text-white/90"
                    >
                      {React.createElement(FaCheckCircle as any, { className: "text-accent-light mr-3 text-lg flex-shrink-0" })}
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Link
                  to="/services"
                  className="inline-flex items-center bg-white hover:bg-gray-50 text-true-v-700 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
                >
                  Explore All Services
                  {React.createElement(FaArrowRight as any, { className: "ml-2" })}
                </Link>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0.4, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="/Photos/Graduate.jpg" 
                    alt="Graduate in cap and gown celebrating academic achievement and career success"
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-true-v-900/40 to-transparent"></div>
                  
                  {/* Success badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center">
                      {React.createElement(FaStar as any, { className: "text-accent text-2xl mr-3" })}
                      <div>
                        <div className="font-bold text-true-v-700">Success Starts Here</div>
                        <div className="text-sm text-text-medium">Join 500+ students who achieved their dreams</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-light/80 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/60 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-true-v-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={pageAnimations.fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  React.createElement(FaStar as any, { key: i, className: "text-yellow-400 text-2xl" })
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-text-dark italic mb-6 leading-relaxed">
                "Schola Way transformed our college selection process from overwhelming to empowering. Their personalized approach made all the difference."
              </blockquote>
              <div className="text-text-medium">
                <div className="font-semibold">Sarah Johnson</div>
                <div>Parent & Student Success Story</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 bg-true-v-600">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center text-white max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={pageAnimations.fadeInDown}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Shape Your Future?
            </motion.h2>
            <motion.p 
              variants={pageAnimations.fadeIn}
              className="text-xl mb-8 opacity-90"
            >
              Join hundreds of students who have found their path with Schola Way's expert guidance.
            </motion.p>
            <motion.div variants={pageAnimations.fadeInUp}>
              <Link 
                to="/contact" 
                className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
              >
                <span>Book Your Free Consultation</span>
                {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;