import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRoute, 
  FaMapMarkerAlt, 
  FaUser, 
  FaGraduationCap, 
  FaChartBar,
  FaArrowRight,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

const Programs: React.FC = () => {

  const services = [
    {
      icon: FaRoute,
      title: "College and Career Roadmap Planning",
      description: "We help students develop strategic action plans tailored to their aspirations, strengths, and values."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Career Identity Coaching",
      description: "We provide tools and mentorship to support young people in building self-awareness and long-term professional vision."
    },
    {
      icon: FaUser,
      title: "Parent Engagement",
      description: "We guide parents through their children's decision-making process, equipping them with strategies to offer constructive support."
    },
    {
      icon: FaGraduationCap,
      title: "School & Community Workshops",
      description: "We collaborate with schools and local organizations to deliver high-impact guidance sessions and group mentoring."
    },
    {
      icon: FaChartBar,
      title: "Assessment Tools",
      description: "We utilize validated career inventories, learning styles assessments, and values-based diagnostics to inform each session."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm scale-110"
          style={{
            backgroundImage: 'url(/Photos/Programs.jpg)'
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
              Programs & <span className="text-true-v-600">Services</span>
            </h1>
            <p className="text-xl text-text-medium">
              Support at every step of your educational journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Enhanced */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Guiding You Through Every Decision
              </h2>
              <p className="text-lg text-text-medium leading-relaxed mb-8">
                Our programs are designed to guide students and families through complex academic 
                and career decisions with confidence, structure, and empathy.
              </p>
              
              {/* Key Benefits with Checkmarks */}
              <div className="space-y-4 mb-8">
                {[
                  "Personalized guidance tailored to your unique goals",
                  "Expert advisors with years of educational experience",
                  "Comprehensive support from application to enrollment",
                  "Data-driven insights for informed decision-making",
                  "Ongoing support throughout your academic journey"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-true-v-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      {React.createElement(FaCheckCircle as any, { className: "text-true-v-600 text-sm" })}
                    </div>
                    <p className="text-text-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "500+", label: "Students Guided" },
                  { number: "95%", label: "Success Rate" },
                  { number: "50+", label: "Partner Schools" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-true-v-600">{stat.number}</div>
                    <div className="text-sm text-text-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Graduate Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Photos/Graduate.jpg" 
                    alt="Student Success - Happy graduate celebrating achievement" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-true-v-600 rounded-full opacity-10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-true-v-500 rounded-full opacity-10 blur-2xl" />
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    {React.createElement(FaCheckCircle as any, { className: "text-green-500 text-2xl" })}
                    <div>
                      <p className="font-semibold text-text-dark">Trusted by Families</p>
                      <p className="text-sm text-text-medium">Nationwide</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Comprehensive support tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-true-v-200"
              >
                <div className="w-14 h-14 bg-true-v-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-true-v-600 transition-all duration-300">
                  {React.createElement(service.icon as any, { className: "text-2xl text-true-v-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="text-2xl font-semibold text-text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-text-medium leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-true-v-600 mb-2">500+</h3>
              <p className="text-text-medium">Students Guided</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold text-true-v-600 mb-2">95%</h3>
              <p className="text-text-medium">Success Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-true-v-600 mb-2">50+</h3>
              <p className="text-text-medium">Partner Schools</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-true-v-600 mb-2">15+</h3>
              <p className="text-text-medium">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-true-v-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  React.createElement(FaStar as any, { key: i, className: "text-yellow-400 text-2xl" })
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-text-dark italic mb-6 leading-relaxed">
                "Schola Way gave me the tools to understand myself and plan a future that actually fits me. 
                Their guidance was invaluable in navigating the college application process."
              </blockquote>
              <p className="text-text-medium">
                <span className="font-semibold text-text-dark">Sarah Martinez</span> — College Freshman, UC Berkeley
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 bg-true-v-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a student, parent, or educator — we're here to help you 
              navigate the path to success.
            </p>
            <Link
              to="/contact"
              className="btn-secondary btn-hover-shine inline-flex items-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
            >
              Book Your Free Consultation
              {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;