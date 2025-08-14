import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaGraduationCap, 
  FaChartBar, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaHome,
  FaHeart
} from 'react-icons/fa';

const Impact: React.FC = () => {

  const hubzoneLocations = [
    {
      city: "North Miami",
      state: "Florida",
      status: "Headquarters",
      description: "Our main operations center located in a federally designated HUBZone community",
      icon: FaHome
    },
    {
      city: "Atlanta",
      state: "Georgia", 
      status: "Planned 2025",
      description: "Expanding services to serve underserved communities in the Southeast",
      icon: FaMapMarkerAlt
    },
    {
      city: "Myrtle Beach",
      state: "South Carolina",
      status: "Planned 2026",
      description: "Bringing career guidance to coastal communities with high need",
      icon: FaMapMarkerAlt
    }
  ];

  const commitmentAreas = [
    {
      icon: FaLightbulb,
      title: "Opportunity for All",
      description: "Breaking cycles of socio-economic disadvantage through accessible programs"
    },
    {
      icon: FaHandshake,
      title: "Community-Centered",
      description: "Free workshops and scholarship assistance in low-income areas"
    },
    {
      icon: FaGlobe,
      title: "Ripple Effect Impact",
      description: "Individual success benefits families, communities, and the broader economy"
    },
    {
      icon: FaHeart,
      title: "Barrier Removal",
      description: "Lowering financial and informational barriers to career success"
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
              Measuring Our <span className="text-true-v-600">Impact</span>
            </h1>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              At Schola Education LLC, we measure our success by the positive outcomes we enable for individuals and communities. Every program is designed with clear, measurable objectives to ensure we are truly making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics & Goals Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Our Five-Year Goals</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                We set ambitious yet achievable targets to ensure accountability and continuous improvement in serving our communities.
              </p>
            </motion.div>


            {/* Accountability Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-true-v-600 p-8 rounded-r-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Commitment to Transparency</h3>
              <p className="text-lg text-text-medium leading-relaxed">
                We will continuously track and report on metrics such as education continuation rates and job placement rates to evaluate our effectiveness and improve our services. By being data-driven and transparent, we hold ourselves accountable to the communities we serve and to our supporters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment to Access */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Commitment to Access</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-3xl mx-auto">
                Our commitment to impact goes hand-in-hand with our commitment to access. All our initiatives are built on the principle of "opportunity for all."
              </p>
            </motion.div>

            {/* Two-Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-text-dark mb-6">Breaking Cycles of Disadvantage</h3>
                <p className="text-lg text-text-medium mb-6 leading-relaxed">
                  We actively seek to break the cycle of socio-economic disadvantage by reaching those who need guidance the most. This means conducting free career workshops, college prep support, and university access programs in low-income areas and providing scholarship assistance for our fee-based services when needed.
                </p>
                <p className="text-lg text-text-medium leading-relaxed">
                  By lowering financial and informational barriers, we help ensure that talent and ambition do not go unrealized due to lack of support or resources.
                </p>
              </motion.div>

              {/* Commitment Areas */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {commitmentAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-true-v-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        {React.createElement(area.icon as any, { className: "text-lg text-true-v-600" })}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-text-dark mb-2">{area.title}</h4>
                        <p className="text-text-medium">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Ripple Effect Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-true-v-600 to-true-v-700 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">The Ripple Effect</h3>
              <p className="text-lg opacity-90">
                When a young person finds the right career path and succeeds, it not only changes their life trajectory but also benefits their family, their community, and the broader economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HUBZone & Geographic Strategy */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Strategic Community Presence</h2>
              <div className="w-24 h-1 bg-true-v-600 mx-auto mb-8"></div>
              <p className="text-xl text-text-medium max-w-4xl mx-auto">
                Schola Education LLC has strategically based its operations in underserved regions. Our headquarters is located in North Miami, Florida, within a federally designated HUBZone (Historically Underutilized Business Zone).
              </p>
            </motion.div>

            {/* HUBZone Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl mb-16"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">What is a HUBZone?</h3>
              <p className="text-lg text-text-medium leading-relaxed">
                HUBZones are areas identified as historically economically disadvantaged – communities with higher poverty or unemployment that have been overlooked for investment. By being physically present in such a community, we directly contribute to local development and remain closely connected to the challenges our participants face.
              </p>
            </motion.div>

            {/* Location Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {hubzoneLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl text-center ${
                    location.status === 'Headquarters' 
                      ? 'bg-gradient-to-br from-true-v-600 to-true-v-700 text-white' 
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    location.status === 'Headquarters' 
                      ? 'bg-white/20' 
                      : 'bg-true-v-100'
                  }`}>
                    {React.createElement(location.icon as any, { 
                      className: `text-2xl ${
                        location.status === 'Headquarters' ? 'text-white' : 'text-true-v-600'
                      }` 
                    })}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    location.status === 'Headquarters' ? 'text-white' : 'text-text-dark'
                  }`}>
                    {location.city}
                  </h3>
                  <h4 className={`text-lg font-medium mb-3 ${
                    location.status === 'Headquarters' ? 'text-white/90' : 'text-true-v-600'
                  }`}>
                    {location.state}
                  </h4>
                  <div className={`text-sm font-semibold mb-4 px-3 py-1 rounded-full inline-block ${
                    location.status === 'Headquarters' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-true-v-100 text-true-v-700'
                  }`}>
                    {location.status}
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    location.status === 'Headquarters' ? 'text-white/80' : 'text-text-medium'
                  }`}>
                    {location.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Future Impact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white border border-gray-200 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">Expected Community Impact</h3>
              <p className="text-lg text-text-medium mb-6 leading-relaxed">
                By expanding into regions of high need, we aim to bring our services to the doorsteps of those who can benefit most, helping to combat regional inequalities. We anticipate that our efforts will lead to measurable improvements like lower youth unemployment rates and higher college entry rates in the communities we serve.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-true-v-600">↓</div>
                  <div className="text-sm text-text-medium">Youth Unemployment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-true-v-600">↑</div>
                  <div className="text-sm text-text-medium">College Entry Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-true-v-600">↑</div>
                  <div className="text-sm text-text-medium">Economic Development</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8">Building Blocks of Change</h2>
            <p className="text-xl text-text-medium mb-8 leading-relaxed">
              Each success story – a student who graduates, a young adult who lands a stable job, a family that gains hope – is a building block of the sustainable social impact we strive to achieve.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-true-v-700 mb-4">Our Vision</h3>
              <p className="text-lg text-text-medium italic leading-relaxed">
                "Through our work, we envision a future where every person, regardless of their background, has the guidance and support to build a rewarding career and contribute positively to society."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Be Part of the Impact
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in creating measurable, lasting change in communities that need it most. Every career we guide is a step toward a more equitable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
              >
                Get Involved
                {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-true-v-600 transition-all group"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;