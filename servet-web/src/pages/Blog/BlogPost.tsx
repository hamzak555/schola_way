import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  console.log('Blog post ID:', id); // Using the id variable

  // In a real app, this would fetch data based on the ID
  const blogPost = {
    id: 1,
    title: 'Top 10 Universities for Turkish Students in the USA',
    content: `
      <p>Choosing the right university is one of the most important decisions in your educational journey. For Turkish students looking to study in the United States, understanding which universities offer the best programs, support systems, and opportunities is crucial.</p>

      <h2>1. Massachusetts Institute of Technology (MIT)</h2>
      <p>MIT is renowned for its engineering and technology programs. The university has a strong international student community and offers excellent support services for students from Turkey.</p>

      <h2>2. Harvard University</h2>
      <p>As one of the most prestigious universities in the world, Harvard offers unparalleled opportunities in various fields. The university's Turkish Student Association provides a home away from home for Turkish students.</p>

      <h2>3. Stanford University</h2>
      <p>Located in the heart of Silicon Valley, Stanford is perfect for students interested in entrepreneurship and innovation. The university's proximity to tech companies provides excellent internship and job opportunities.</p>

      <h2>4. University of California, Berkeley</h2>
      <p>UC Berkeley combines academic excellence with a vibrant campus culture. The university is known for its diversity and welcomes students from all over the world.</p>

      <h2>5. Columbia University</h2>
      <p>Located in New York City, Columbia offers the perfect blend of academic rigor and urban experience. The university's location provides access to countless cultural and professional opportunities.</p>

      <h2>Important Factors to Consider</h2>
      <ul>
        <li><strong>Academic Programs:</strong> Ensure the university offers strong programs in your field of interest</li>
        <li><strong>Financial Aid:</strong> Look for universities that offer scholarships to international students</li>
        <li><strong>Support Services:</strong> Check for international student services and Turkish student organizations</li>
        <li><strong>Location:</strong> Consider climate, cost of living, and proximity to Turkish communities</li>
        <li><strong>Career Services:</strong> Evaluate job placement rates and career support for international students</li>
      </ul>

      <h2>Application Tips</h2>
      <p>When applying to these top universities, remember to:</p>
      <ol>
        <li>Start your preparation early - at least 18 months before your intended start date</li>
        <li>Focus on achieving high scores in standardized tests (SAT/ACT, TOEFL/IELTS)</li>
        <li>Build a strong academic profile with excellent grades</li>
        <li>Engage in meaningful extracurricular activities</li>
        <li>Write compelling personal statements that showcase your unique perspective</li>
      </ol>

      <p>Remember, while these universities are highly competitive, with proper preparation and guidance, Turkish students can successfully gain admission to these prestigious institutions.</p>
    `,
    author: 'Dr. Ahmet Yilmaz',
    date: 'January 15, 2024',
    category: 'University Guides',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    readTime: '5 min read',
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'How to Write a Winning Personal Statement',
      excerpt: 'Learn the secrets to crafting a compelling personal statement.',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3',
    },
    {
      id: 3,
      title: 'Understanding the F-1 Visa Process',
      excerpt: 'A comprehensive guide to navigating the F-1 student visa application.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    },
    {
      id: 4,
      title: 'Scholarship Opportunities for International Students',
      excerpt: 'Explore various scholarship programs available for Turkish students.',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38b4d5f',
    },
  ];

  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${title} ${url}`, '_blank');
        break;
    }
  };

  return (
    <article className="blog-post-page">
      <div className="blog-post-hero" style={{ backgroundImage: `url(${blogPost.image})` }}>
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="back-link">
              <FaArrowLeft /> Back to Blog
            </Link>
            <h1>{blogPost.title}</h1>
            <div className="post-meta">
              <span><FaCalendar /> {blogPost.date}</span>
              <span><FaUser /> {blogPost.author}</span>
              <span><FaClock /> {blogPost.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="blog-post-content">
        <div className="container">
          <div className="content-wrapper">
            <motion.div 
              className="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              
              <div className="share-section">
                <h3>Share this article</h3>
                <div className="share-buttons">
                  <button onClick={() => sharePost('facebook')} className="share-btn facebook">
                    <FaFacebook />
                  </button>
                  <button onClick={() => sharePost('twitter')} className="share-btn twitter">
                    <FaTwitter />
                  </button>
                  <button onClick={() => sharePost('linkedin')} className="share-btn linkedin">
                    <FaLinkedin />
                  </button>
                  <button onClick={() => sharePost('whatsapp')} className="share-btn whatsapp">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.aside 
              className="sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="author-box">
                <h3>About the Author</h3>
                <h4>{blogPost.author}</h4>
                <p>Education consultant with over 15 years of experience helping Turkish students achieve their American education dreams.</p>
              </div>

              <div className="cta-box">
                <h3>Need Help with Your Application?</h3>
                <p>Get personalized guidance from our expert consultants</p>
                <Link to="/contact" className="btn btn-primary">
                  Get Free Consultation
                </Link>
              </div>
            </motion.aside>
          </div>

          <motion.section 
            className="related-posts"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="related-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={post.image} alt={post.title} />
                  <div className="related-content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>Read More →</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;