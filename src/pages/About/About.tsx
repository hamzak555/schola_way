import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartBar, FaHandshake, FaGlobe, FaLightbulb, FaHeart, FaCompass, FaGraduationCap, FaUser, FaBook, FaStar } from 'react-icons/fa';

const About: React.FC = () => {

  const values = [
    {
      icon: FaGlobe,
      title: "Equity & Accessibility",
      description: "Making quality education guidance available to all students."
    },
    {
      icon: FaChartBar,
      title: "Data-Driven Approach",
      description: "Using evidence-based methods to guide educational decisions."
    },
    {
      icon: FaHeart,
      title: "Personalized Support",
      description: "Recognizing each student's unique journey and aspirations."
    },
    {
      icon: FaHandshake,
      title: "Ethical Service",
      description: "Maintaining integrity while embracing diversity in all forms."
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
            backgroundImage: 'url(/Photos/About.jpg)'
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
              Empowering Careers
              <span className="block text-true-v-600">Transforming Lives</span>
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Schola Education LLC was founded in the United States with the vision of making expert career guidance available to anyone who needs it. We specialize in career determination and vocational guidance for students, young professionals, and those in career transitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">About Schola Education LLC</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0.4, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold text-text-dark mb-6">Our Holistic Approach</h3>
                <p className="text-text-medium leading-relaxed mb-6">
                  Our approach is holistic and client-centered: we combine one-on-one career coaching, vocational interest inventories, and targeted skill-building to address each person's unique needs. Whether someone is exploring college majors, entering the job market for the first time, or reinventing their career path, Schola Education provides the tools and support to guide them forward.
                </p>
                <p className="text-text-medium leading-relaxed">
                  As a social enterprise, we operate at the intersection of education and workforce development. We work not only with individuals, but also with communities and institutions to create a supportive ecosystem for career development.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0.4, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-br from-true-v-50 to-true-v-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-text-dark mb-6">Commitment to Equity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-true-v-600 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                      {React.createElement(FaHeart as any, { className: "text-white text-xs" })}
                    </div>
                    <p className="text-text-medium">All our programs are designed with inclusivity in mind</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-true-v-600 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                      {React.createElement(FaHandshake as any, { className: "text-white text-xs" })}
                    </div>
                    <p className="text-text-medium">Reasonable pricing and financial assistance ensure accessibility</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-true-v-600 rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                      {React.createElement(FaGlobe as any, { className: "text-white text-xs" })}
                    </div>
                    <p className="text-text-medium">Low-income and disadvantaged individuals are never turned away</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Ultimate Goal</h3>
              <p className="text-lg text-text-medium italic">
                "To foster greater equity in education and employment – so that background or financial status is never a barrier to achieving one's career ambitions."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Our Founder</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
            </motion.div>

            {/* Founder Introduction */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0.4, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/Photos/Founder.jpg" 
                    alt="Servet Gülsün Şirin - Founder and Education Consultant" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.4, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-3xl font-bold text-text-dark mb-4">Servet Gülsün Şirin</h3>
                <h4 className="text-xl text-true-v-600 mb-6">Founder & CEO, Schola Education LLC</h4>
                <p className="text-text-medium leading-relaxed mb-6">
                  Servet Gülsün Şirin brings over 20 years of expertise in career counseling, educational management, and large-scale social impact projects. She began her career as a psychologist and earned a master's degree in Educational Management and Supervision, which laid the foundation for her innovative approach to career guidance.
                </p>
                <p className="text-text-medium leading-relaxed mb-6">
                  Through her extensive efforts, Ms. Şirin has directly and indirectly touched the lives of hundreds of thousands of young people, equipping them with the guidance to make conscious decisions about their education and career.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-lg text-true-v-700 font-medium italic">
                    "Now, with Schola Education LLC, I'm channeling my passion and proven strategies into the U.S. context, helping countless individuals navigate their career journeys with confidence and purpose."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Career Highlights */}
            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-text-dark mb-12 text-center">Career Highlights & Achievements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Key Achievement Cards */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaGraduationCap as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">Educational Leadership</h4>
                  <p className="text-text-medium text-sm">
                    From 2004-2012, served as Guidance Coordinator at one of Turkey's leading educational institutions, structuring counseling systems for hundreds of schools.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaBook as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">Published Author</h4>
                  <p className="text-text-medium text-sm">
                    Author of "Meslekler Rehberi" (Career Guide) - 250,000 copies distributed free to Turkish high schools (2007-2011).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaStar as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">Media Impact</h4>
                  <p className="text-text-medium text-sm">
                    Created and hosted "Education Workshop," a nationally broadcast TV program featuring inspiring experts and reaching wide youth audiences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaChartBar as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">University Growth</h4>
                  <p className="text-text-medium text-sm">
                    As Candidate Relations Director at Istanbul Okan University (2012-2023), led initiatives that grew annual income from 80M to 600M+ TL.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaUser as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">Massive Outreach</h4>
                  <p className="text-text-medium text-sm">
                    Personally visited high schools in every Turkish province, delivering seminars to approximately 250,000 students across all 81 provinces.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mb-4">
                    {React.createElement(FaLightbulb as any, { className: "text-xl text-true-v-600" })}
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-3">Innovation Leader</h4>
                  <p className="text-text-medium text-sm">
                    Founded KariyerFest (CareerFest), Turkey's first experiential career festival, bringing 50,000+ high school students to campus over a decade.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Major Initiatives */}
            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <h3 className="text-3xl font-bold text-text-dark mb-8 text-center">Transformative Initiatives</h3>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-true-v-600">
                  <h4 className="text-xl font-bold text-text-dark mb-3">CharacterIX Vocational Orientation</h4>
                  <p className="text-text-medium mb-3">
                    National coordinator and field lead (2018-2022) for scientific career assessment tool implementation with over 146,000 students across Turkey.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-true-v-600">
                  <h4 className="text-xl font-bold text-text-dark mb-3">Anatolian Meetings Program</h4>
                  <p className="text-text-medium mb-3">
                    Social responsibility program hosting 700-1,200 students annually from underprivileged regions at university campuses, reaching about 8,000 students total.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-true-v-600">
                  <h4 className="text-xl font-bold text-text-dark mb-3">Okan in Anatolia</h4>
                  <p className="text-text-medium mb-3">
                    Coordinated over 1,000 school visits per year by university faculty, directly informing over 100,000 students about higher education and career options.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Publications & Media Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Publications & Media</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.4, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-true-v-50 to-true-v-100 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-text-dark mb-6">Career Guide (Meslekler Rehberi)</h3>
              <p className="text-text-medium leading-relaxed mb-6">
                One of our cornerstone publications is the Career Guide, authored by our founder Servet Gülsün Şirin. This comprehensive guidebook introduces a wide range of professions to young readers, helping them understand various career paths and what it takes to pursue them.
              </p>
              <p className="text-text-medium leading-relaxed mb-6">
                Originally published in 2007, the guide was distributed in high schools nationwide – a total of 250,000 copies were provided free of charge to students over several years. The Career Guide became an invaluable resource for career exploration and contributed to a culture of informed decision-making among youth.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-true-v-600">
                <h4 className="text-xl font-bold text-text-dark mb-3">New Edition Coming Soon</h4>
                <p className="text-text-medium leading-relaxed mb-4">
                  We are proud to announce that an expanded and updated edition of the Career Guide is in development. This new edition will be published in both Turkish and English by Schola Education LLC, aiming to reach an even broader audience and serve as a trusted roadmap for the next generation of students and job-seekers.
                </p>
                <p className="text-sm text-true-v-700 font-medium italic">
                  Stay tuned for release details and how to access the new Career Guide when it becomes available.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Mission & Vision</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0.4, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-true-v-50 to-true-v-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-true-v-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(FaLightbulb as any, { className: "text-2xl text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-text-dark mb-6 text-center">Our Mission</h3>
                <p className="text-lg text-text-medium leading-relaxed mb-4">
                  To provide education and career support to disadvantaged groups – primarily immigrant youth, low-income individuals, and communities facing educational inequality – helping them realize their potential.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  This mission is aimed at increasing equality of opportunity in education and supporting workforce development, thereby contributing to a sustainable social transformation in society.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.4, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(FaCompass as any, { className: "text-2xl text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-text-dark mb-6 text-center">Our Vision</h3>
                <p className="text-lg text-text-medium leading-relaxed mb-4">
                  To become a nationally recognized social enterprise in the United States by developing and implementing high-impact, scalable education programs under the Schola Education LLC umbrella.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  In line with this vision, we strive to empower individuals to create positive change not only in their own lives, but also in the communities to which they belong.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.4, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
                Conferences and Events
              </h2>
              <p className="text-xl text-text-medium max-w-2xl mx-auto">
                Watch this video to understand how we help students navigate their educational journey
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0.5, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/gdsnUTL9qJ0"
                title="Schola Way Educational Guidance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0.4, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Our core values guide every interaction and decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.4, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-true-v-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(value.icon as any, { className: "text-2xl text-true-v-600" })}
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">{value.title}</h3>
                <p className="text-text-medium">{value.description}</p>
              </motion.div>
            ))}
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
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Future Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our personalized approach can help you make confident educational decisions.
            </p>
            <Link
              to="/contact"
              className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
            >
              Start Your Journey
              {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;