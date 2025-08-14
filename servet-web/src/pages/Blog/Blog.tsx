import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Universities for International Students',
      excerpt: 'Discover the best universities that welcome Turkish students with open arms and offer excellent programs for international students.',
      author: 'Dr. Ahmet Yilmaz',
      date: 'January 15, 2024',
      category: 'University Guides',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Write a Winning Personal Statement',
      excerpt: 'Learn the secrets to crafting a compelling personal statement that will make your application stand out from the crowd.',
      author: 'Sarah Johnson',
      date: 'January 10, 2024',
      category: 'Application Tips',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Understanding the F-1 Visa Process',
      excerpt: 'A comprehensive guide to navigating the F-1 student visa application process, from start to finish.',
      author: 'Mehmet Ozkan',
      date: 'January 5, 2024',
      category: 'Visa Guide',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Scholarship Opportunities for International Students',
      excerpt: 'Explore various scholarship programs available for Turkish students pursuing education in the United States.',
      author: 'Emily Chen',
      date: 'December 28, 2023',
      category: 'Financial Aid',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38b4d5f',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Adapting to American Campus Life',
      excerpt: 'Tips and tricks for Turkish students to successfully transition to life on an American university campus.',
      author: 'Prof. John Miller',
      date: 'December 20, 2023',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
      readTime: '8 min read',
    },
    {
      id: 6,
      title: 'TOEFL vs IELTS: Which Test Should You Take?',
      excerpt: 'Compare the two major English proficiency tests and find out which one is right for your university applications.',
      author: 'Dr. Lisa Thompson',
      date: 'December 15, 2023',
      category: 'Test Prep',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      readTime: '5 min read',
    },
  ];

  const categories = [
    'all',
    'University Guides',
    'Application Tips',
    'Visa Guide',
    'Financial Aid',
    'Student Life',
    'Test Prep',
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm scale-110"
          style={{
            backgroundImage: 'url(/Photos/Blog.jpg)'
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
              Education <span className="text-true-v-600">Insights</span>
            </h1>
            <p className="text-xl text-text-medium">
              Expert advice and tips for your educational journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-true-v-600 text-white'
                        : 'bg-gray-100 text-text-medium hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-true-v-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-text-medium mb-4 space-x-4">
                    <span className="flex items-center">
                      {React.createElement(FaCalendar as any, { className: "mr-2" })}
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      {React.createElement(FaUser as any, { className: "mr-2" })}
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-medium mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-true-v-600 font-medium hover:text-true-v-700 transition-colors group"
                  >
                    Read More
                    {React.createElement(FaArrowRight as any, { className: "ml-2 text-sm group-hover:translate-x-1 transition-transform" })}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <p className="text-text-medium text-lg">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-br from-true-v-50 to-white rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Stay Updated
            </h2>
            <p className="text-text-medium mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest education tips and university updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-true-v-600 transition-colors"
              />
              <button 
                type="submit"
                className="btn-primary btn-hover-shine bg-true-v-600 text-white px-8 py-3 rounded-full font-medium"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;