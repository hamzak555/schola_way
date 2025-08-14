import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaBook, 
  FaHome, 
  FaChartBar, 
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
  FaHandshake,
  FaGraduationCap,
  FaGlobe
} from 'react-icons/fa';

const Services: React.FC = () => {

  const mainServices = [
    {
      icon: FaUser,
      title: "Career Guidance Workshops & Personalized Coaching",
      shortDescription: "Interactive workshops and one-on-one coaching for youth and new immigrants",
      fullDescription: "We conduct regular career workshops for youth (especially high school and college students) and for new immigrants adapting to the U.S. job market. Participants engage in interactive sessions to explore their interests, set career goals, and create an education or career roadmap. These workshops are complemented by one-on-one career counseling sessions and mentorship programs, providing personalized guidance for those who need deeper support.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Group of diverse professionals in a career guidance workshop discussion",
      features: [
        "Career planning bootcamps for students",
        "Sample classes and professional meetups", 
        "Individual coaching sessions",
        "Mentorship program matching"
      ]
    },
    {
      icon: FaBook,
      title: "Skills Development Courses",
      shortDescription: "Short-term courses building in-demand technical and foundational skills",
      fullDescription: "We offer short-term courses to build in-demand technical and foundational skills that improve employability. Examples include digital literacy and basic coding, professional communication, résumé and interview preparation, and other job-readiness skills. These courses often lead to certificates and are aligned with what today's job market needs.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Students learning coding and digital skills in a modern classroom setting",
      features: [
        "Digital literacy and basic coding",
        "Professional communication skills",
        "Résumé and interview preparation",
        "Certificate programs available",
        "Aligned with Workforce Innovation and Opportunity Act"
      ]
    },
    {
      icon: FaHome,
      title: "Workforce Readiness & Job Placement Support",
      shortDescription: "Hands-on support for job searching and workplace integration",
      fullDescription: "For individuals from low-income or disadvantaged backgrounds who are seeking employment, we provide hands-on support in job searching and work readiness. This includes mock interview sessions, networking events, and organized meet-and-greet days with local employers. We guide participants in finding internships and entry-level job opportunities to gain real work experience.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional job interview coaching session with diverse participants",
      features: [
        "Mock interview sessions",
        "Networking events with employers",
        "Internship and job placement assistance",
        "American workplace culture training",
        "Support for immigrant youth integration"
      ]
    },
    {
      icon: FaChartBar,
      title: "Personalized Career Assessments",
      shortDescription: "Research-based vocational inventory and career analysis",
      fullDescription: "Effective career planning starts with understanding oneself. We utilize a research-based vocational orientation inventory to analyze participants' interests, personality traits, and strengths. This assessment tool helps individuals discover which career paths and fields of study align best with their profile. Each participant receives a personalized report, which our counselors review with them to inform their career decisions.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional career counselor reviewing assessment results with a client",
      features: [
        "Comprehensive personality and interest analysis",
        "Research-based assessment tools",
        "Personalized career path recommendations",
        "One-on-one report review sessions",
        "Adapted from tools used with 146,000+ students"
      ]
    },
    {
      icon: FaUser,
      title: "Educator Training & Counselor Certification",
      shortDescription: "Training programs for school counselors and career advisors",
      fullDescription: "We extend our impact by training the professionals who guide students. Schola Education is developing certified training programs for school counselors, career advisors, and youth mentors. Through blended online and in-person courses – covering topics like 'Career Counseling for Immigrant Students' and 'Guidance in the Digital Age' – we equip practitioners with up-to-date skills and tools.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional development training session for educators and counselors",
      features: [
        "Certified training programs",
        "Blended online and in-person courses",
        "Career counseling for immigrant students",
        "Digital age guidance techniques",
        "Schola Education certification awarded"
      ]
    }
  ];

  const benefits = [
    {
      icon: FaLightbulb,
      title: "Culturally Responsive",
      description: "Programs designed to honor diverse backgrounds and experiences"
    },
    {
      icon: FaHandshake,
      title: "Outcome-Driven",
      description: "Measurable results that make a tangible difference in lives"
    },
    {
      icon: FaGlobe,
      title: "Accessible",
      description: "Services available to all, regardless of background or financial status"
    },
    {
      icon: FaStar,
      title: "Evidence-Based",
      description: "Rooted in best practices of career counseling and adult education"
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
            initial={{ opacity: 0.4, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6">
              Our <span className="text-true-v-600">Services</span>
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Our services are designed to address every aspect of career development, from self-discovery to job placement. We offer a range of programs and support for individuals and institutions, all rooted in best practices of career counseling and adult education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Comprehensive Career Development</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                Whether it's a teenager unsure about college, a parent seeking guidance for their child, or an adult striving for a better career, Schola Education's services are here to support the journey.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.4, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-true-v-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(benefit.icon as any, { className: "text-2xl text-true-v-600" })}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">{benefit.title}</h3>
                  <p className="text-text-medium text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.4, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Key Services</h2>
            <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.4, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 items-stretch ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-true-v-100 rounded-xl flex items-center justify-center mb-6">
                    {React.createElement(service.icon as any, { className: "text-2xl text-true-v-600" })}
                  </div>
                  <h3 className="text-3xl font-bold text-text-dark mb-4">{service.title}</h3>
                  <p className="text-lg text-text-medium mb-6 leading-relaxed">{service.fullDescription}</p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-true-v-600 rounded-full flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center">
                          {React.createElement(FaCheckCircle as any, { className: "text-white text-xs" })}
                        </div>
                        <p className="text-text-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual/Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl shadow-lg overflow-hidden h-full">
                    <img 
                      src={service.image} 
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Customized for Your Organization</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                All of our services can be customized to the needs of our partner schools, colleges, and community organizations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaGraduationCap,
                  title: "Educational Institutions",
                  description: "Tailored programs for schools and colleges to enhance student guidance services",
                  features: ["Workshop series", "Counselor training", "Student assessments", "Parent engagement programs"]
                },
                {
                  icon: FaHandshake,
                  title: "Community Organizations",
                  description: "Partnership programs designed to serve diverse community needs",
                  features: ["Community workshops", "Volunteer training", "Outreach programs", "Cultural adaptation support"]
                },
                {
                  icon: FaHome,
                  title: "Employers & Workforce Development",
                  description: "Corporate partnerships to bridge the gap between education and employment",
                  features: ["Job readiness training", "Skills assessments", "Internship programs", "Career fairs"]
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-true-v-600 rounded-full flex items-center justify-center mb-6">
                    {React.createElement(partner.icon as any, { className: "text-2xl text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4">{partner.title}</h3>
                  <p className="text-text-medium mb-6">{partner.description}</p>
                  <ul className="space-y-2">
                    {partner.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-true-v-600 rounded-full mr-3"></div>
                        <span className="text-sm text-text-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-true-v-600 to-true-v-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.4, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're an individual seeking guidance or an organization looking to enhance your services, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
              >
                Get Started Today
                {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-true-v-600 transition-all group"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;