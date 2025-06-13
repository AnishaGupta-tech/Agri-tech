import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="agri-app">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <i className="fas fa-seedling"></i>
            <span>AgriVision</span>
          </div>
          
          <div className="nav-menu">
            <ul className="nav-links">
              <li><a href="#features"><i className="fas fa-chart-line"></i> Analytics</a></li>
              <li><a href="#irrigation"><i className="fas fa-tint"></i> Smart Irrigation</a></li>
              <li><a href="#crop-care"><i className="fas fa-leaf"></i> Crop Care</a></li>
              <li><a href="#harvest"><i className="fas fa-calendar-alt"></i> Harvest Timing</a></li>
              <li><a href="#supply-chain"><i className="fas fa-link"></i> Supply Chain</a></li>
              <li><a href="#chatbot"><i className="fas fa-robot"></i> Farm Assistant</a></li>
            </ul>
            
            <div className="nav-actions">
              <a href="#login" className="nav-login">Log In</a>
              <a href="#demo" className="nav-demo">Request Demo</a>
            </div>
          </div>
          
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Transforming Agriculture with <span>AI Intelligence</span></h1>
          <p>Our platform leverages cutting-edge technology to maximize your yields, minimize risks, and optimize every aspect of your farming operations.</p>
          
          <div className="hero-cta">
            <a href="#demo" className="cta-primary">
              <i className="fas fa-play"></i> See How It Works
            </a>
            <a href="#features" className="cta-secondary">
              Explore Features <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>+35%</h3>
              <p>Average Yield Increase</p>
            </div>
            <div className="stat-item">
              <h3>50%</h3>
              <p>Water Savings</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Farmers</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="farm-visual">
            <img src="https://images.unsplash.com/photo-1692369584496-3216a88f94c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="High-tech farm" className="main-image" />
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Drone farming" className="floating-image floating-1" />
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Crop monitoring" className="floating-image floating-2" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Our Smart Farming Solutions</h2>
          <p>Harness the power of data and AI to revolutionize your agricultural practices</p>
        </div>
        
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cloud-sun-rain"></i>
            </div>
            <h3>Climate Smart Agriculture</h3>
            <p>Adapt your farming to changing climate conditions with predictive weather analytics and customized recommendations.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-tablet-alt"></i>
            </div>
            <h3>Real-time Monitoring</h3>
            <p>Get instant updates on soil conditions, crop health, and equipment status through our intuitive dashboard.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bug"></i>
            </div>
            <h3>Pest & Disease Alerts</h3>
            <p>Early detection system identifies potential threats before they spread, with recommended treatment plans.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>AI Farm Assistant</h3>
            <p>Voice-enabled support in regional languages to guide you through daily operations and troubleshooting.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          
          {/* Feature 5 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>Blockchain Traceability</h3>
            <p>Transparent supply chain from farm to market, ensuring quality and fair pricing for your produce.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          
          {/* Feature 6 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3>Yield Optimization</h3>
            <p>Data-driven insights to determine optimal planting density, fertilization, and harvest timing.</p>
            <a href="#learn-more" className="feature-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section">
        <div className="section-header dark">
          <h2>How AgriVision Works</h2>
          <p>Simple integration process with powerful results</p>
        </div>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Farm Assessment</h3>
              <p>Our experts analyze your land, crops, and current practices to create a customized implementation plan.</p>
            </div>
            <div className="step-image">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Farm assessment" />
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Sensor Installation</h3>
              <p>We install IoT sensors for soil, weather, and crop monitoring across your fields.</p>
            </div>
            <div className="step-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Sensor installation" />
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Data Integration</h3>
              <p>Your farm data is securely uploaded to our AI-powered analytics platform.</p>
            </div>
            <div className="step-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Data integration" />
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Get Actionable Insights</h3>
              <p>Receive real-time recommendations via app, SMS, or our voice assistant in your preferred language.</p>
            </div>
            <div className="step-image">
              <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Actionable insights" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Trusted by Farmers Worldwide</h2>
          <p>Success stories from our global farming community</p>
        </div>
        
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>AgriVision's smart irrigation system reduced our water usage by 40% while increasing our yield. The AI predictions for pest outbreaks have saved us thousands in potential crop losses.</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos Mendoza" />
              <div>
                <h4>Carlos Mendoza</h4>
                <p>Vineyard Owner, Spain</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p>The regional language support made all the difference for our workers. Now everyone from field hands to managers can access the same information in their preferred language.</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya Patel" />
              <div>
                <h4>Priya Patel</h4>
                <p>Tea Plantation Manager, India</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Farm?</h2>
            <p>Join the agricultural revolution today and experience the future of farming.</p>
            
            <div className="cta-actions">
              <a href="#demo" className="cta-primary">
                <i className="fas fa-calendar-alt"></i> Schedule Demo
              </a>
              <a href="#contact" className="cta-secondary">
                <i className="fas fa-phone-alt"></i> Contact Sales
              </a>
            </div>
          </div>
          
          <div className="cta-image">
            <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Happy farmer" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <i className="fas fa-seedling"></i>
                <span>AgriVision</span>
              </div>
              <p>Empowering farmers with AI-driven agricultural technology for sustainable and profitable farming.</p>
              
              <div className="social-links">
                <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                <a href="#instagram"><i className="fab fa-instagram"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a href="#youtube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Solutions</h4>
                <ul>
                  <li><a href="#smart-farming">Smart Farming</a></li>
                  <li><a href="#precision-ag">Precision Agriculture</a></li>
                  <li><a href="#irrigation">Irrigation Management</a></li>
                  <li><a href="#crop-health">Crop Health Monitoring</a></li>
                  <li><a href="#supply-chain">Supply Chain</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#press">Press</a></li>
                  <li><a href="#partners">Partners</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#help-center">Help Center</a></li>
                  <li><a href="#webinars">Webinars</a></li>
                  <li><a href="#case-studies">Case Studies</a></li>
                  <li><a href="#api">API Documentation</a></li>
                  <li><a href="#community">Community</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:info@agrivision.com">info@agrivision.com</a></li>
                  <li><a href="tel:+18005551234">+1 (800) 555-1234</a></li>
                  <li>123 Farm Tech Blvd</li>
                  <li>San Francisco, CA 94107</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
            
            <div className="copyright">
              &copy; {new Date().getFullYear()} AgriVision Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;