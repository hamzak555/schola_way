import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaHandshake, 
  FaUser, 
  FaHeart,
  FaArrowRight,
  FaLightbulb,
  FaGlobe,
  FaChartBar,
  FaHome,
  FaBook
} from 'react-icons/fa';

const Partnerships: React.FC = () => {

  const partnerCategories = [
    {
      icon: FaGraduationCap,
      title: "Educational Institutions",
      description: "High schools, colleges, and universities seeking to enhance student career development",
      fullDescription: "We work with high schools, colleges, and universities to support their students' career development. This includes organizing joint events like career days and college readiness workshops, as well as providing our vocational assessment tools and counseling expertise to complement school guidance departments. By teaming up with schools, we ensure students get timely, quality career advice integrated into their educational journey.",
      benefits: [
        "Joint career days and college readiness workshops",
        "Vocational assessment tools and counseling expertise",
        "Enhanced guidance department capabilities",
        "Integrated career advice throughout educational journey"
      ],
      examples: ["Career fair partnerships", "Assessment tool integration", "Guidance counselor training", "Student workshops"]
    },
    {
      icon: FaUser,
      title: "Community Organizations & Non-Profits",
      description: "Community centers, youth organizations, and immigrant support groups",
      fullDescription: "We collaborate with community centers, youth organizations, immigrant support groups, and NGOs focused on education or workforce development. Through these partnerships, we connect with people in the community and tailor our programs to local needs. For example, we may partner with a local community center in a low-income neighborhood to host a free career seminar or with a youth charity to provide mentoring for at-risk youth.",
      benefits: [
        "Community-tailored programming",
        "Free career seminars in low-income areas",
        "Mentoring for at-risk youth",
        "Trusted community connections"
      ],
      examples: ["Community center partnerships", "Youth organization collaboration", "Immigrant support programs", "Local NGO initiatives"]
    },
    {
      icon: FaHome,
      title: "Government Programs & Agencies",
      description: "Federal and state workforce initiatives and local workforce boards",
      fullDescription: "Schola Education LLC aligns its programs with federal and state workforce initiatives, such as the U.S. Department of Labor's programs under the Workforce Innovation and Opportunity Act (WIOA). By coordinating with local workforce boards and American Job Centers, we complement existing public services and avoid duplication. We aim to be a bridge that helps government-funded opportunities reach our target populations.",
      benefits: [
        "WIOA program alignment",
        "Local workforce board coordination",
        "American Job Center collaboration",
        "HUBZone business advantages"
      ],
      examples: ["WIOA program integration", "Workforce board partnerships", "Community development projects", "Federal support initiatives"]
    },
    {
      icon: FaHome,
      title: "Employers & Industry Partners",
      description: "Companies across technology, healthcare, hospitality, manufacturing, and more",
      fullDescription: "We forge connections with companies across various sectors – technology, healthcare, hospitality, manufacturing, and more – to create pipelines from our training programs to actual jobs. Employer partners contribute by advising on curriculum (to ensure the skills we teach match industry needs), offering internship or apprenticeship spots, participating in our career fairs and networking events, and considering our program graduates for open positions.",
      benefits: [
        "Curriculum development advisory",
        "Internship and apprenticeship opportunities",
        "Career fair and networking participation",
        "Direct hiring pipeline for graduates"
      ],
      examples: ["Skills-based curriculum design", "Internship placements", "Career networking events", "Graduate hiring programs"]
    },
    {
      icon: FaHeart,
      title: "Foundations & Sponsors",
      description: "Philanthropic foundations and corporate social responsibility programs",
      fullDescription: "To expand our scholarship fund and free community programs, we welcome partnerships with philanthropic foundations, corporate social responsibility programs, and sponsors who share our vision. Such partners provide vital support that allows us to scale up our operations and innovate new program offerings (for example, funding a new digital learning platform or sponsoring a series of free public career workshops).",
      benefits: [
        "Expanded scholarship opportunities",
        "Free community program funding",
        "Innovation and platform development",
        "Transparent impact reporting"
      ],
      examples: ["Scholarship fund expansion", "Digital platform development", "Free workshop series", "Impact measurement partnerships"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: FaLightbulb,
      title: "Leverage Expertise",
      description: "Combine knowledge and experience across sectors for better outcomes"
    },
    {
      icon: FaHandshake,
      title: "Share Resources",
      description: "Pool resources for maximum efficiency and broader reach"
    },
    {
      icon: FaGlobe,
      title: "Expand Reach",
      description: "Access new audiences and communities together"
    },
    {
      icon: FaChartBar,
      title: "Measurable Impact",
      description: "Create synergistic effects that benefit entire communities"
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
              Building <span className="text-true-v-600">Partnerships</span>
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Collaboration is at the heart of Schola Education's approach. We believe that by partnering with other organizations, we can magnify our impact and create a supportive network around our participants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Why Partnership Matters</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                We actively seek and foster partnerships across multiple sectors to create synergy in the field of career development.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-true-v-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(benefit.icon as any, { className: "text-2xl text-true-v-600" })}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">{benefit.title}</h3>
                  <p className="text-text-medium">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-true-v-600 to-true-v-700 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Creating Synergy Together</h3>
              <p className="text-lg opacity-90">
                Our partnerships enable us to leverage expertise, share resources, and reach a broader audience than we ever could alone. Together, we empower more individuals to find their path and strengthen the workforce of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Our Partnership Categories</h2>
            <div className="w-24 h-1 bg-true-v-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-20">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-true-v-100 rounded-xl flex items-center justify-center mr-4">
                      {React.createElement(category.icon as any, { className: "text-2xl text-true-v-600" })}
                    </div>
                    <h3 className="text-3xl font-bold text-text-dark">{category.title}</h3>
                  </div>
                  <p className="text-lg text-text-medium mb-6 leading-relaxed">{category.fullDescription}</p>
                  
                  {/* Benefits List */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-dark mb-4">Partnership Benefits:</h4>
                    <div className="space-y-2">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-true-v-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <p className="text-text-medium">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Examples Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-true-v-500 to-true-v-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.createElement(category.icon as any, { className: "text-3xl text-white" })}
                      </div>
                      <h4 className="text-xl font-bold text-text-dark mb-2">Partnership Examples</h4>
                      <p className="text-text-medium">{category.description}</p>
                    </div>
                    
                    {/* Examples Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {category.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-medium text-text-dark">{example}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="border-t pt-6 mt-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-true-v-600">25+</div>
                          <div className="text-sm text-text-medium">Active Partners</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-true-v-600">100%</div>
                          <div className="text-sm text-text-medium">Mutual Benefit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Partnership Success</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                Our collaborative approach creates win-win scenarios for all stakeholders involved.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Community Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-true-v-50 to-true-v-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-true-v-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(FaUser as any, { className: "text-2xl text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 text-center">Community Impact</h3>
                <p className="text-text-medium text-center mb-6">
                  Building trust and ensuring our services reach those who might not find us otherwise through community partnerships.
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-true-v-700">85%</div>
                  <div className="text-sm text-text-medium">Community Reach Increase</div>
                </div>
              </motion.div>

              {/* Employer Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-200"
              >
                <div className="w-16 h-16 bg-true-v-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(FaHome as any, { className: "text-2xl text-true-v-600" })}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 text-center">Employer Benefits</h3>
                <p className="text-text-medium text-center mb-6">
                  Companies get motivated, prepared candidates while helping shape curriculum to meet industry needs.
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-true-v-700">90%</div>
                  <div className="text-sm text-text-medium">Employer Satisfaction</div>
                </div>
              </motion.div>

              {/* Student Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(FaGraduationCap as any, { className: "text-2xl text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 text-center">Student Success</h3>
                <p className="text-text-medium text-center mb-6">
                  Integrated career guidance throughout the educational journey leads to better outcomes for all participants.
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-true-v-700">75%</div>
                  <div className="text-sm text-text-medium">Improved Career Outcomes</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Call-to-Action */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Partner With Us</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                If your organization is interested in partnering with Schola Education – whether to co-host an event, support our cause, or integrate our services – we would be excited to connect with you.
              </p>
            </motion.div>

            {/* Partnership Types */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: FaHandshake,
                  title: "Co-Host Events",
                  description: "Partner with us to organize career fairs, workshops, and community events",
                  action: "Event Partnership"
                },
                {
                  icon: FaHeart,
                  title: "Support Our Cause",
                  description: "Provide funding, resources, or volunteer support for our programs",
                  action: "Become a Sponsor"
                },
                {
                  icon: FaBook,
                  title: "Integrate Services",
                  description: "Incorporate our career guidance services into your existing programs",
                  action: "Service Integration"
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-true-v-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(type.icon as any, { className: "text-2xl text-true-v-600" })}
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-4">{type.title}</h3>
                  <p className="text-text-medium mb-6">{type.description}</p>
                  <div className="text-sm font-semibold text-true-v-600 bg-true-v-50 px-4 py-2 rounded-full inline-block">
                    {type.action}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">Ready to Collaborate?</h3>
              <p className="text-lg text-text-medium mb-6">
                Let's discuss how we can work together to create meaningful impact in career development and workforce preparation.
              </p>
              <div className="text-sm text-text-medium mb-6">
                We welcome partnerships that align with our mission of providing accessible, high-quality career guidance to underserved communities.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-true-v-600 to-true-v-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our network of partners who are committed to empowering individuals and strengthening communities through career development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
              >
                Start Partnership Discussion
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

export default Partnerships;