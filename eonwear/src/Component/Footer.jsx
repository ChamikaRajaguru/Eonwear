import '../Styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About EONWEAR</h4>
            <p>
              We craft timeless watches designed to complement every style. 
              With precision and elegance, each timepiece tells a story of excellence.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#facebook" className="social-icon">f</a>
              <a href="#instagram" className="social-icon">📷</a>
              <a href="#twitter" className="social-icon">𝕏</a>
              <a href="#linkedin" className="social-icon">in</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">Subscribe to get special offers and updates</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} EONWEAR. All rights reserved.</p>
          </div>
          <div className="footer-policies">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
