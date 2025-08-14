import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

const {width} = Dimensions.get('window');

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEmailPress = () => {
    Linking.openURL('mailto:info@tr-usa-education.com');
  };

  const services = [
    {
      icon: '📚',
      title: 'University Selection',
      description: 'Find the perfect university match based on your academic profile, interests, and career goals',
    },
    {
      icon: '📝',
      title: 'Application Support',
      description: 'Expert guidance through essays, recommendation letters, and application requirements',
    },
    {
      icon: '💰',
      title: 'Scholarship Assistance',
      description: 'Maximize your chances of securing financial aid and scholarships',
    },
    {
      icon: '📋',
      title: 'Visa Guidance',
      description: 'Step-by-step support through the F-1 student visa application process',
    },
    {
      icon: '🎯',
      title: 'Test Preparation',
      description: 'TOEFL, SAT, and GRE preparation resources and strategies',
    },
    {
      icon: '🏠',
      title: 'Settlement Support',
      description: 'Help with housing, banking, and adjusting to life in America',
    },
  ];

  const stats = [
    {value: '500+', label: 'Students Placed'},
    {value: '150+', label: 'Partner Universities'},
    {value: '95%', label: 'Visa Success Rate'},
    {value: '$2M+', label: 'Scholarships Secured'},
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#e30a17" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>TR → USA Education</Text>
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
              <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLine1]} />
              <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLine2]} />
              <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLine3]} />
            </TouchableOpacity>
          </View>

          {/* Mobile Menu */}
          {menuOpen && (
            <View style={styles.mobileMenu}>
              <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                <Text style={styles.menuText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                <Text style={styles.menuText}>Process</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                <Text style={styles.menuText}>Universities</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => setMenuOpen(false)}>
                <Text style={styles.menuText}>Contact</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Hero Section */}
          <View style={styles.hero}>
            <Image
              source={require('../Photos/mount-fuji-volcano-japan-river-reflection-boat-couple-5k-3840x2160-5440.jpg')}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>Your American Dream Starts Here</Text>
              <Text style={styles.heroSubtitle}>
                We help Turkish students navigate the journey to studying at top American universities
              </Text>
              <TouchableOpacity style={styles.ctaButton} onPress={handleEmailPress}>
                <Text style={styles.ctaButtonText}>Start Your Journey</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Services Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How We Help You Succeed</Text>
            <View style={styles.servicesGrid}>
              {services.map((service, index) => (
                <View key={index} style={styles.serviceCard}>
                  <Text style={styles.serviceIcon}>{service.icon}</Text>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.statsSection}>
            <View style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* CTA Section */}
          <View style={styles.ctaSection}>
            <Text style={styles.ctaSectionTitle}>Ready to Start Your American Education Journey?</Text>
            <Text style={styles.ctaSectionSubtitle}>
              Join thousands of Turkish students who have successfully made their American university dreams come true
            </Text>
            <TouchableOpacity style={styles.ctaButton} onPress={handleEmailPress}>
              <Text style={styles.ctaButtonText}>Get Free Consultation</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 TR → USA Education. All rights reserved.</Text>
            <Text style={styles.footerText}>info@tr-usa-education.com | +90 212 XXX XX XX</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#e30a17',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  hamburger: {
    padding: 5,
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 3,
  },
  hamburgerLine1: {
    transform: [{rotate: '45deg'}, {translateY: 8}],
  },
  hamburgerLine2: {
    opacity: 0,
  },
  hamburgerLine3: {
    transform: [{rotate: '-45deg'}, {translateY: -8}],
  },
  mobileMenu: {
    backgroundColor: '#e30a17',
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  hero: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: '#e30a17',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  section: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 30,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: width > 400 ? '48%' : '100%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  statValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  ctaSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  ctaSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 10,
  },
  ctaSectionSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#333',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default App;