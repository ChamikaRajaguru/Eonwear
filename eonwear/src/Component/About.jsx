import '../Styles/About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About EONWEAR</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              EONWEAR was founded with a singular mission: to create timepieces that transcend trends and stand the test of time. 
              With over two decades of expertise in watchmaking, our team combines traditional craftsmanship with modern innovation 
              to deliver watches that are not just instruments for telling time, but expressions of personal style.
            </p>
            
            <h3>Our Commitment</h3>
            <p>
              We are committed to excellence in every aspect of our business. From sourcing the finest materials to ensuring 
              meticulous quality control, every EONWEAR watch is a testament to our dedication to perfection. We believe that 
              luxury should be accessible, and that quality should never be compromised.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Unique Designs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality</h4>
              <p>Premium materials and precision engineering in every watch</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Cutting-edge technology combined with timeless design</p>
            </div>
            <div className="value-card">
              <h4>Integrity</h4>
              <p>Honest practices and transparent communication with our customers</p>
            </div>
            <div className="value-card">
              <h4>Sustainability</h4>
              <p>Environmentally responsible production and ethical sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
