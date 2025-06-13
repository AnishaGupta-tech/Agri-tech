import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="agri-app">
      {/* Hero Section */}
      <header className="hero">
        <nav>
          <div className="logo">
            <i className="fas fa-leaf"></i>
            <span>AgriSmart</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact" className="cta-secondary">Get Started</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>Revolutionizing Agriculture with AI</h1>
          <p>Increase crop yields, prevent diseases, and optimize harvests with our smart farming platform designed for farmers of all scales.</p>
          <div className="hero-buttons">
            <a href="#demo" className="cta-primary">Request Demo</a>
            <a href="#learn-more" className="cta-secondary">Learn More</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm field with technology" />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Smart Farming Features</h2>
        <p className="section-subtitle">Our platform combines cutting-edge technology with agricultural expertise</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Smart Irrigation</h3>
            <p>AI-powered water management that adjusts to soil conditions and weather forecasts to optimize water usage.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Automated Crop Care</h3>
            <p>Real-time monitoring and alerts for disease prevention and pest control with actionable recommendations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Harvest Optimization</h3>
            <p>Predictive analytics to determine the perfect harvest time for maximum yield and quality.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-link"></i>
            </div>
            <h3>Blockchain Supply Chain</h3>
            <p>Transparent tracking from farm to consumer, ensuring quality and fair pricing for your produce.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-language"></i>
            </div>
            <h3>Multilingual Voice Assistant</h3>
            <p>Voice-enabled chatbot with regional language support to make technology accessible to all farmers.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Analytics</h3>
            <p>Comprehensive dashboards and reports to track farm performance and identify improvement areas.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How AgriSmart Works</h2>
        <p className="section-subtitle">Simple integration, powerful results</p>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Setup & Installation</h3>
              <p>Our team helps you install sensors and connect your farm to our platform. No technical expertise needed.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Data Collection</h3>
              <p>Sensors collect soil, weather, and crop health data which is securely uploaded to our AI system.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>Our algorithms process the data to provide personalized recommendations for your farm.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Actionable Insights</h3>
              <p>Receive alerts and recommendations via app, SMS, or our voice assistant in your preferred language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Farmers Say</h2>
        <p className="section-subtitle">Success stories from our community</p>
        
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"AgriSmart helped increase my rice yield by 30% while reducing water usage by half. The voice assistant in my local language made it so easy to use!"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rajesh Kumar" />
              <div>
                <h4>Rajesh Kumar</h4>
                <p>Rice Farmer, Punjab</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The disease prediction feature saved my entire tomato crop last season. I received an alert about potential blight a week before any visible signs appeared."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya Patel" />
              <div>
                <h4>Priya Patel</h4>
                <p>Vegetable Farmer, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Farming?</h2>
          <p>Join thousands of farmers already benefiting from AI-powered agriculture.</p>
          <div className="cta-buttons">
            <a href="#signup" className="cta-primary">Sign Up Now</a>
            <a href="#contact" className="cta-secondary">Contact Our Team</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <i className="fas fa-leaf"></i>
              <span>AgriSmart</span>
            </div>
            <p>Making advanced farming accessible, efficient, and sustainable for all.</p>
            <div className="social-links">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#youtube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#updates">Updates</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AgriSmart Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;