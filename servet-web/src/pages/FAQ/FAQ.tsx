import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqSections: FAQSection[] = [
    {
      title: "The Counseling Experience",
      items: [
        {
          question: "How does the counseling process work?",
          answer: "It begins with a discovery session where we get to know the student and their goals. This is followed by structured assessments, personalized planning meetings, and regular check-ins to adjust the path as needed."
        },
        {
          question: "Is the counseling personalized to each student?",
          answer: "Absolutely. Every plan is designed around the student's values, aspirations, personality, and learning style — no generic checklists."
        },
        {
          question: "How long does the process take?",
          answer: "It depends on your needs. Some students work with us over several months; others come for a short series of sessions during key transition periods."
        }
      ]
    },
    {
      title: "Availability & Accessibility",
      items: [
        {
          question: "Are services offered online or in person?",
          answer: "Both options are available depending on your location and preference. Online sessions offer full access to all tools and materials."
        },
        {
          question: "Do you work with international students?",
          answer: "Yes. We work with students around the world through online sessions, including those applying to universities in the U.S., U.K., Canada, and other destinations."
        },
        {
          question: "What time zones do you accommodate for international students?",
          answer: "We offer flexible scheduling and try to accommodate students in Europe, the Middle East, and Asia as needed."
        }
      ]
    },
    {
      title: "Tools & Approach",
      items: [
        {
          question: "What tools and methods do you use?",
          answer: "We use a combination of validated career inventories, learning style diagnostics, values-based assessments, and structured planning templates grounded in psychology and education research."
        },
        {
          question: "Is this the same as school guidance counseling?",
          answer: "No — our service is more personalized, consistent, and research-driven. Many schools don't have the capacity to provide individualized support at this level."
        },
        {
          question: "Do you help with choosing a college major or program?",
          answer: "Yes, part of our work involves helping students choose the right area of study based on their interests, personality, and long-term goals."
        }
      ]
    },
    {
      title: "Parents & Families",
      items: [
        {
          question: "How are parents involved in the process?",
          answer: "We offer family engagement sessions to help parents understand and support their child's decision-making process in a constructive and informed way."
        },
        {
          question: "Can we book a session just for parents?",
          answer: "Yes, parents can request guidance sessions without their child present if they have questions about how to support their child's education or career planning."
        }
      ]
    },
    {
      title: "Booking & Pricing",
      items: [
        {
          question: "How do I get started?",
          answer: "Start by booking a free introductory consultation through our contact page. We'll learn about your goals and recommend a path forward."
        },
        {
          question: "Do you offer packages or single sessions?",
          answer: "We offer both — you can book a one-time session or choose a package for longer-term support."
        },
        {
          question: "Are your services affordable?",
          answer: "We aim to make high-quality guidance accessible. We offer flexible pricing based on package type and family needs."
        }
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm scale-110"
          style={{
            backgroundImage: 'url(/Photos/Faq.jpg)'
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
              Frequently Asked
              <span className="block text-true-v-600">Questions</span>
            </h1>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Answers to the most common questions about how we support students, families, and schools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: sectionIndex === 0 ? "-200px" : "-100px" }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                    {section.title}
                  </h2>
                  <div className="w-20 h-1 bg-true-v-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${sectionIndex}-${itemIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <motion.div
                        key={itemId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                          isOpen ? 'border-true-v-600' : 'border-true-v-200'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className={`w-full px-8 py-6 text-left flex items-center justify-between transition-all duration-200 ${
                            isOpen ? 'bg-true-v-50' : 'hover:bg-true-v-25'
                          }`}
                        >
                          <h3 className="text-xl font-semibold text-text-dark pr-6 leading-tight">
                            {item.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex-shrink-0 w-8 h-8 bg-true-v-100 rounded-full flex items-center justify-center"
                          >
                            {React.createElement(IoChevronDown as any, { 
                              className: `text-true-v-600 transition-colors duration-200 ${isOpen ? 'text-true-v-700' : ''}` 
                            })}
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-8 pt-2">
                                <p className="text-text-medium leading-relaxed text-lg">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-true-v-600 to-true-v-700">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're here to help. Get in touch with us for personalized answers to your specific situation.
            </p>
            <Link
              to="/contact"
              className="btn-secondary btn-hover-shine inline-flex items-center justify-center bg-white text-true-v-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg group"
            >
              Contact Us Today
              {React.createElement(FaArrowRight as any, { className: "ml-2 group-hover:translate-x-1 transition-transform" })}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;